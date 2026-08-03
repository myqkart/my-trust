import { colors, duration, radius, shadow, spacing } from "@/styles/theme/tokens";

/**
 * Theme configuration bridging design tokens to app usage.
 */
export const themeConfig = {
  colors,
  spacing,
  radius,
  shadow,
  duration,
  defaultMode: "light" as const,
  enableSystemPreference: false,
} as const;

export type ThemeConfig = typeof themeConfig;
