"use client";

import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Global motion: Framer MotionConfig + Lenis smooth scroll.
 * Lenis is created imperatively so the React tree is never remounted
 * (a ReactLenis wrapper swap was leaving page transitions stuck at opacity 0).
 */
export function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let cancelled = false;
    let lenis: { destroy: () => void; raf: (time: number) => void } | null =
      null;
    let rafId = 0;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: false,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <MotionConfig
      reducedMotion={prefersReducedMotion ? "always" : "user"}
      transition={{ ease: "easeOut" }}
    >
      {children}
    </MotionConfig>
  );
}
