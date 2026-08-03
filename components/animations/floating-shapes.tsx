"use client";

import { useEffect, useRef } from "react";
import { registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

interface FloatingShapesProps {
  className?: string;
}

/**
 * Subtle GSAP float for hero decorative shapes.
 * Uses opacity/transform only; skipped for reduced motion.
 */
export function FloatingShapes({ className }: FloatingShapesProps) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const gsap = registerGsapPlugins();
    const root = rootRef.current;
    if (!root) return;

    const shapes = root.querySelectorAll<HTMLElement>("[data-float]");
    const tweens = Array.from(shapes).map((shape, index) =>
      gsap.to(shape, {
        y: index % 2 === 0 ? -12 : 10,
        x: index % 2 === 0 ? 8 : -6,
        duration: 3.5 + index * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }),
    );

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [reduced]);

  return (
    <div ref={rootRef} className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <span
        data-float
        className="absolute top-[18%] left-[12%] size-3 rounded-full bg-soft/40"
      />
      <span
        data-float
        className="absolute top-[36%] right-[18%] size-2 rounded-full bg-accent/30"
      />
      <span
        data-float
        className="absolute bottom-[28%] left-[22%] size-4 rounded-full bg-white/10"
      />
      <span
        data-float
        className="absolute right-[28%] bottom-[18%] size-2.5 rounded-full bg-soft/30"
      />
    </div>
  );
}
