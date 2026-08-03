/**
 * Analytics provider configuration.
 * IDs remain empty until verified credentials are provided.
 */
export const analyticsConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  microsoftClarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
  enabled: process.env.NODE_ENV === "production",
} as const;

export type AnalyticsConfig = typeof analyticsConfig;
