import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { absoluteUrl } from "@/utils/seo";

interface CreateMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Bypass title template (useful for homepage). */
  absoluteTitle?: string;
}

/** Shared Metadata API helper aligned with seo.md. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = seoConfig.openGraph.images[0].url,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle,
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ?? `${title} | ${siteConfig.name}`;
  const ogImage = {
    url: image,
    width: seoConfig.openGraph.images[0].width,
    height: seoConfig.openGraph.images[0].height,
    alt: ogTitle,
  };

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: keywords.length > 0 ? keywords : [...seoConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
