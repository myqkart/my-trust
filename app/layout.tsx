import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import { AppProviders } from "@/providers";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/utils/seo";
import "./globals.css";

/** Prefer static HTML for SEO/GEO crawlers (content is local data). */
export const dynamic = "force-static";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
  adjustFontFallback: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: seoConfig.robots,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": absoluteUrl("/rss.xml"),
    },
  },
  openGraph: {
    type: seoConfig.openGraph.type,
    locale: seoConfig.openGraph.locale,
    siteName: seoConfig.openGraph.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    url: siteConfig.url,
    images: [...seoConfig.openGraph.images],
  },
  twitter: {
    card: seoConfig.twitter.card,
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    images: [seoConfig.openGraph.images[0].url],
  },
  category: "Nonprofit",
  applicationName: siteConfig.shortName,
};

export const viewport: Viewport = {
  themeColor: "#0A1931",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-button)] focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-md"
        >
          Skip to content
        </a>
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
