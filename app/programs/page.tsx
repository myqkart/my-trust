import Link from "next/link";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { ProgramCard } from "@/components/cards";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { faqInfo, programsInfo } from "@/data/demo";
import { media } from "@/data/media";

const programsDescription =
  "Explore Anandam Seva Foundation programs—elder care, medical camps, food distribution, education, women empowerment, and more.";

export const metadata = createPageMetadata({
  title: "Programs",
  description: programsDescription,
  path: ROUTES.programs,
  keywords: ["NGO programs Gujarat", "Senior Citizen Care", "Medical Camps"],
});

export default function ProgramsPage() {
  return (
    <>
      <PageJsonLd
        title="Programs"
        description={programsDescription}
        path={ROUTES.programs}
        breadcrumbs={[{ name: "Programs", path: ROUTES.programs }]}
        pageType="CollectionPage"
        faqs={[...faqInfo]}
      />
      <PageHero
        breadcrumbs={[{ label: "Programs" }]}
        eyebrow="Our Work"
        title="Programs that restore dignity"
        description="From residential elder care to community outreach—every initiative is designed around people, not paperwork."
        primaryCta={{ label: "Donate Now", href: ROUTES.donate }}
        secondaryCta={{ label: "Volunteer", href: ROUTES.volunteer }}
      />

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Impact Areas"
          title="Seven ways we serve"
          description="Choose a program to learn how your support becomes meals, medicine, learning, and belonging."
        />
        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programsInfo.map((program) => (
            <StaggerItem key={program.id}>
              <ProgramCard
                title={program.title}
                summary={program.summary}
                href={program.href}
                impact={program.impact}
                imageSrc={media.programs[program.slug as keyof typeof media.programs]}
                imageAlt={`${program.title} program`}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary">
            <Link href={ROUTES.impact}>See Our Impact</Link>
          </Button>
        </div>
      </Section>

      <DonateCTA />
    </>
  );
}
