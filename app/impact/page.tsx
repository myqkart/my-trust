import Link from "next/link";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { StatisticCard, TrustBadge } from "@/components/cards";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { trustBadgesInfo } from "@/data/demo";
import { impactHighlights } from "@/data/pages";

const impactDescription =
  "See how Navchetna Charitable Trust serves Ahmedabad—tree plantation, food distribution, gau seva, helping the poor, and education support.";

export const metadata = createPageMetadata({
  title: "Impact",
  description: impactDescription,
  path: ROUTES.impact,
  keywords: ["NGO impact Gujarat", "Charitable Trust Ahmedabad"],
});

export default function ImpactPage() {
  return (
    <>
      <PageJsonLd
        title="Impact"
        description={impactDescription}
        path={ROUTES.impact}
        breadcrumbs={[{ name: "Impact", path: ROUTES.impact }]}
      />
      <PageHero
        breadcrumbs={[{ label: "Impact" }]}
        eyebrow="Transparency"
        title="Impact you can feel"
        description="Seventeen years of seva across five focus areas: plants, food, gau seva, helping the poor, and education."
        primaryCta={{ label: "Download Reports", href: ROUTES.reports }}
        secondaryCta={{ label: "Donate", href: ROUTES.donate }}
      />

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="By the Numbers"
          title="Seva across Ahmedabad"
        />
        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactHighlights.map((item) => (
            <StaggerItem key={item.label}>
              <StatisticCard label={item.label} value={item.value} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section background="soft">
        <SectionHeading
          align="center"
          eyebrow="Trust"
          title="Accountability built in"
          description="Founded in 2009 by Shri Rupesh Kumar Modi. Reach us for how your support is used."
        />
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadgesInfo.map((badge) => (
            <StaggerItem key={badge.label}>
              <TrustBadge label={badge.label} description={badge.description} />
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href={ROUTES.reports}>View Documents</Link>
          </Button>
        </div>
      </Section>

      <DonateCTA />
    </>
  );
}
