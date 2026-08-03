import Link from "next/link";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SplitLayout } from "@/components/layout";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/json-ld";
import { ROUTES } from "@/constants/routes";
import { faqInfo, statisticsInfo, trustInfo } from "@/data/demo";
import { dailyRoutine, facilities } from "@/data/pages";
import { media } from "@/data/media";
import { OptimizedImage } from "@/components/ui/optimized-image";

const oldAgeHomeDescription =
  "Visit Anandam Seva Old Age Home in Ahmedabad—safe shelter, healthcare, meals, companionship, and daily dignity for senior citizens.";

export const metadata = createPageMetadata({
  title: "Old Age Home",
  description: oldAgeHomeDescription,
  path: ROUTES.oldAgeHome,
  keywords: ["Old Age Home in Ahmedabad", "Senior Citizen Care"],
});

export default function OldAgeHomePage() {
  return (
    <>
      <PageJsonLd
        title="Old Age Home"
        description={oldAgeHomeDescription}
        path={ROUTES.oldAgeHome}
        breadcrumbs={[{ name: "Old Age Home", path: ROUTES.oldAgeHome }]}
        faqs={[...faqInfo]}
        extras={[
          serviceSchema({
            name: "Old Age Home",
            description: oldAgeHomeDescription,
            path: ROUTES.oldAgeHome,
          }),
        ]}
      />
      <PageHero
        breadcrumbs={[{ label: "Old Age Home" }]}
        eyebrow="Residential Care"
        title="A home filled with belonging"
        description={`${statisticsInfo.residents} residents live with healthcare, nutritious meals, recreation, and the warmth of family.`}
        primaryCta={{ label: "Sponsor a Resident", href: ROUTES.donate }}
        secondaryCta={{ label: "Plan a Visit", href: ROUTES.contact }}
        stats={[
          { label: "Residents", value: statisticsInfo.residents },
          { label: "Meals served", value: statisticsInfo.meals },
          { label: "Years of care", value: statisticsInfo.yearsOfService },
        ]}
      />

      <Section background="white">
        <SplitLayout
          left={
            <SlideUp>
              <SectionHeading
                eyebrow="Our Home"
                title="Care that feels personal"
                description="Anandam Seva Old Age Home is more than shelter. It is a community where elders are respected, heard, and supported every day."
              />
              <p className="mt-6 text-muted">
                Located near Shantivan Circle on SG Highway, Ahmedabad, our home
                blends medical attention with companionship, prayer, gardens, and
                shared meals—rooted in {trustInfo.slogan}
              </p>
              <Button asChild className="mt-8">
                <Link href={ROUTES.volunteer}>Volunteer With Us</Link>
              </Button>
            </SlideUp>
          }
          right={
            <SlideUp>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-image)] bg-soft/40">
                <OptimizedImage
                  src={media.oldAgeHome}
                  alt="Residents and caregivers sharing a warm moment at the old age home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </SlideUp>
          }
        />
      </Section>

      <Section background="soft">
        <SectionHeading
          align="center"
          eyebrow="Facilities"
          title="Spaces designed for comfort"
          description="Every corner supports safety, accessibility, and everyday joy."
        />
        <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <StaggerItem key={facility}>
              <Card className="h-full text-center">
                <CardTitle className="text-lg">{facility}</CardTitle>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Daily Life"
          title="A gentle, purposeful routine"
          description="Structure brings comfort—and room remains for friendship and rest."
        />
        <ol className="mx-auto mt-12 max-w-3xl space-y-4">
          {dailyRoutine.map((item) => (
            <li
              key={item.time}
              className="flex gap-4 rounded-[var(--radius-card)] border border-border bg-soft/20 p-6"
            >
              <Badge variant="accent" className="h-fit shrink-0">
                {item.time}
              </Badge>
              <div>
                <p className="font-heading font-semibold text-primary">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <DonateCTA />
    </>
  );
}
