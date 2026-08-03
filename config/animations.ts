import { duration, easing, stagger, viewport } from "@/styles/theme/motion";

/**
 * Shared animation configuration from animations.md.
 */
export const animationsConfig = {
  duration,
  easing,
  stagger,
  viewport,
  pageTransition: {
    duration: duration.md,
  },
  counter: {
    duration: 2000,
  },
  reducedMotionFallback: "fade" as const,
} as const;

export type AnimationsConfig = typeof animationsConfig;
