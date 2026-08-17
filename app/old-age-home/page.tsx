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
  "Navchetna Charitable Trust is working towards an Old Age Home in Ahmedabad—a safe, respectful, and caring environment for elders who need companionship and support.";

export const metadata = createPageMetadata({
  title: "Upcoming Old Age Home",
  description: oldAgeHomeDescription,
  path: ROUTES.oldAgeHome,
  keywords: ["Old Age Home in Ahmedabad", "Senior Citizen Care", "Navchetna Charitable Trust"],
});

export default function OldAgeHomePage() {
  return (
    <>
      <PageJsonLd
        title="Upcoming Old Age Home"
        description={oldAgeHomeDescription}
        path={ROUTES.oldAgeHome}
        breadcrumbs={[{ name: "Old Age Home", path: ROUTES.oldAgeHome }]}
        faqs={[...faqInfo]}
        extras={[
          serviceSchema({
            name: "Upcoming Old Age Home",
            description: oldAgeHomeDescription,
            path: ROUTES.oldAgeHome,
          }),
        ]}
      />
      <PageHero
        breadcrumbs={[{ label: "Old Age Home" }]}
        eyebrow="Coming Soon"
        title="A home filled with belonging"
        description={trustInfo.elderCommitment}
        primaryCta={{ label: "Support This Vision", href: ROUTES.donate }}
        secondaryCta={{ label: "Talk to Us", href: ROUTES.contact }}
        stats={[
          { label: "Status", value: "Planned" },
          { label: "Serving since", value: statisticsInfo.established },
          { label: "Years of seva", value: statisticsInfo.yearsOfService },
        ]}
      />

      <Section background="white">
        <SplitLayout
          left={
            <SlideUp>
              <SectionHeading
                eyebrow="Our Commitment"
                title="Respect, care and support for every elder"
                description="Navchetna Charitable Trust is working towards establishing an Old Age Home so elderly people who need care, companionship, and support can live in a safe, respectful, and caring environment."
              />
              <p className="mt-6 text-muted">
                The Trust aims to provide senior citizens with essential
                facilities along with dignity, care, companionship, and an
                opportunity to live a better life. Through this initiative, we
                hope to strengthen the spirit of service, respect, and compassion
                towards the elderly in society.
              </p>
              <Button asChild className="mt-8">
                <Link href={ROUTES.donate}>Help Us Build This Home</Link>
              </Button>
            </SlideUp>
          }
          right={
            <SlideUp>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-image)] bg-soft/40">
                <OptimizedImage
                  src={media.oldAgeHome}
                  alt="A vision of companionship and care for elders at the upcoming old age home"
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
          eyebrow="Planned Facilities"
          title="Spaces designed for comfort"
          description="This is the kind of home we are working to create—safe, accessible, and full of everyday dignity."
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
          eyebrow="A Day We Envision"
          title="A gentle, purposeful routine"
          description="When the home opens, days will hold structure, friendship, and rest."
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
