/**
 * Cache and performance defaults for Phase 9 optimization.
 */
export const performanceConfig = {
  /** Long-lived cache for hashed static assets. */
  staticAssetMaxAge: 31536000,
  /** Short cache for HTML documents (CDN-friendly). */
  documentMaxAge: 60,
  documentSWR: 300,
  /** Default next/image quality from assets.md targets. */
  imageQuality: 80,
  /** Hero images load eagerly; everything else lazy. */
  heroPriority: true,
} as const;

export type PerformanceConfig = typeof performanceConfig;
