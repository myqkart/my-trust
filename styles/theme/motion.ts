/**
 * Motion timing tokens from animations.md.
 */
export const duration = {
  instant: 100,
  xs: 100,
  micro: 150,
  sm: 200,
  fast: 250,
  md: 400,
  normal: 400,
  lg: 600,
  slow: 600,
  xl: 900,
  story: 1000,
} as const;

export const easing = {
  primary: "ease-out",
  secondary: "ease-in-out",
} as const;

export const stagger = {
  text: 40,
  gallery: 50,
  cards: 60,
  buttons: 80,
  statistics: 100,
  timeline: 120,
} as const;

export const viewport = {
  once: true,
  amount: 0.2,
} as const;
