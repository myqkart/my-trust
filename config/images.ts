/**
 * next/image defaults aligned with tech.md and assets.md.
 */
export const imageConfig = {
  formats: ["image/avif", "image/webp"] as const,
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  quality: 80,
  blurPlaceholder: true,
  lazyByDefault: true,
  heroPriority: true,
} as const;

export type ImageConfig = typeof imageConfig;
