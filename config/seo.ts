import { siteConfig } from "@/config/site";
import { seoKeywords, trustInfo } from "@/data/demo";

/**
 * Default SEO metadata from seo.md + demo-data.md.
 */
export const seoConfig = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: `${siteConfig.name} | Old Age Home in Ahmedabad`,
  description: `${trustInfo.slogan} ${trustInfo.tagline}`,
  canonical: siteConfig.url,
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [...seoKeywords],
} as const;

export type SeoConfig = typeof seoConfig;
