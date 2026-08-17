import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { WaveDivider } from "@/components/ui/svg-decorations";
import { SectionSkeleton } from "@/components/ui/section-skeleton";
import {
  HomeAboutPreview,
  HomeFeaturedPrograms,
  HomeFeaturedStory,
  HomeImpactCounters,
  HomeMissionVision,
  HomeTrustIndicators,
} from "@/components/sections/home";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { ROUTES } from "@/constants/routes";
import { STATISTICS } from "@/constants/statistics";
import { seoKeywords, trustInfo } from "@/data/demo";
import { webPageSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

const HomeStatisticsDashboard = dynamic(
  () =>
    import("@/components/sections/home/statistics-dashboard").then(
      (mod) => mod.HomeStatisticsDashboard,
    ),
  { loading: () => <SectionSkeleton rows={4} /> },
);

const HomeGalleryPreview = dynamic(
  () =>
    import("@/components/sections/home/gallery-preview").then(
      (mod) => mod.HomeGalleryPreview,
    ),
  { loading: () => <SectionSkeleton /> },
);

const HomeTestimonials = dynamic(
  () =>
    import("@/components/sections/home/testimonials").then(
      (mod) => mod.HomeTestimonials,
    ),
  { loading: () => <SectionSkeleton rows={2} /> },
);

const HomeUpcomingEvents = dynamic(
  () =>
    import("@/components/sections/home/upcoming-events").then(
      (mod) => mod.HomeUpcomingEvents,
    ),
  { loading: () => <SectionSkeleton /> },
);

const HomePartners = dynamic(
  () =>
    import("@/components/sections/home/partners").then(
      (mod) => mod.HomePartners,
    ),
  { loading: () => <SectionSkeleton rows={1} /> },
);

const HomeTransparencyPreview = dynamic(
  () =>
    import("@/components/sections/home/transparency-preview").then(
      (mod) => mod.HomeTransparencyPreview,
    ),
  { loading: () => <SectionSkeleton rows={2} /> },
);

const HomeNewsletter = dynamic(
  () =>
    import("@/components/sections/home/newsletter").then(
      (mod) => mod.HomeNewsletter,
    ),
  { loading: () => <SectionSkeleton rows={1} /> },
);

export const metadata = createPageMetadata({
  title: "Home",
  absoluteTitle: seoConfig.defaultTitle,
  description: seoConfig.description,
  path: ROUTES.home,
  keywords: [...seoKeywords],
});

/**
 * Homepage storytelling flow from pages.md (sections 01–15).
 * Below-fold sections are code-split for smaller initial JS.
 * Footer is provided by SiteShell.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: siteConfig.name,
          description: seoConfig.description,
          path: ROUTES.home,
        })}
      />
      {/* 01 Hero */}
      <div className="relative">
        <Hero
          eyebrow={siteConfig.name}
          title={trustInfo.slogan}
          description={siteConfig.tagline}
          primaryCta={{
            label: "Support Our Mission",
            href: ROUTES.donate,
            variant: "secondary",
          }}
          secondaryCta={{
            label: "Explore Our Work",
            href: ROUTES.about,
          }}
          stats={[
            { label: "Years of Service", value: STATISTICS.yearsOfService },
            { label: "Serving Since", value: STATISTICS.established },
            { label: "Focus Areas", value: STATISTICS.programs },
            { label: "Based in", value: STATISTICS.city },
          ]}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-background">
          <WaveDivider />
        </div>
      </div>

      {/* 02 Trust Indicators */}
      <HomeTrustIndicators />

      {/* 03 About Preview */}
      <HomeAboutPreview />

      {/* 04 Mission & Vision */}
      <HomeMissionVision />

      {/* 05 Impact Counters */}
      <HomeImpactCounters />

      {/* 06 Featured Programs */}
      <HomeFeaturedPrograms />

      {/* 07 Resident Story */}
      <HomeFeaturedStory />

      {/* 08–15 Below-fold (code-split) */}
      <HomeStatisticsDashboard />
      <HomeGalleryPreview />
      <HomeTestimonials />
      <HomeUpcomingEvents />
      <HomePartners />
      <HomeTransparencyPreview />
      <DonateCTA />
      <HomeNewsletter />
    </>
  );
}
