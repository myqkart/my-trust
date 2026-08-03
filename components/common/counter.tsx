"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { counterDefaults } from "@/animations/counter";
import { cn } from "@/utils/cn";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  description?: string;
  className?: string;
  durationMs?: number;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  className,
  durationMs = counterDefaults.durationMs,
}: CounterProps) {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shownValue = reducedMotion ? value : display;

  useEffect(() => {
    if (reducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!started || reducedMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setDisplay(Math.round(easeOutCubic(progress) * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, durationMs, reducedMotion]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p className="font-number text-4xl font-bold text-primary md:text-5xl">
        {prefix}
        {shownValue.toLocaleString("en-IN")}
        {suffix}
      </p>
      {label ? (
        <p className="mt-2 font-semibold text-secondary">{label}</p>
      ) : null}
      {description ? (
        <p className="mt-2 text-sm text-muted">{description}</p>
      ) : null}
    </div>
  );
}
