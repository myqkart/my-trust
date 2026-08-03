/**
 * 8pt spacing system from design.md.
 * Use only these values (plus the documented 4px micro unit).
 */
export const spacing = {
  1: "4px",
  2: "8px",
  4: "16px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  18: "72px",
  20: "80px",
  24: "96px",
  30: "120px",
  40: "160px",
} as const;

export const sectionPadding = {
  desktop: spacing[30],
  tablet: spacing[24],
  mobile: spacing[18],
} as const;

export const layout = {
  container: "1280px",
  content: "760px",
  reading: "680px",
} as const;

/** Shared Tailwind classes — keep Section / Container / layouts in sync. */
export const containerPaddingClass = "px-4 sm:px-6 lg:px-8";

export const sectionSpacingClass = {
  none: "py-0",
  sm: "py-[var(--space-12)] md:py-[var(--space-16)]",
  md: "py-[var(--space-18)] md:py-[var(--space-24)]",
  lg: "py-[var(--space-18)] md:py-[var(--space-24)] lg:py-[var(--space-30)]",
} as const;
