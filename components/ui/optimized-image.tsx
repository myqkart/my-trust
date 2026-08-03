import Image, { type ImageProps } from "next/image";
import { cn } from "@/utils/cn";
import { performanceConfig } from "@/config/performance";
import { imageBlurDataUrl } from "@/data/media";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  /** Meaningful alt text required (assets.md / seo.md). */
  alt: string;
};

/**
 * next/image wrapper with project defaults (quality, lazy-by-default).
 * Set `priority` only for hero / LCP imagery.
 */
export function OptimizedImage({
  alt,
  className,
  priority = false,
  quality = performanceConfig.imageQuality,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  loading,
  placeholder,
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const useBlur =
    placeholder === "blur" ||
    (placeholder === undefined && typeof props.src === "string");

  return (
    <Image
      alt={alt}
      className={cn(className)}
      quality={quality}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : (loading ?? "lazy")}
      placeholder={useBlur ? "blur" : placeholder}
      blurDataURL={useBlur ? (blurDataURL ?? imageBlurDataUrl) : blurDataURL}
      {...props}
    />
  );
}
