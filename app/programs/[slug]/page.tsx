import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/json-ld";
import { ROUTES } from "@/constants/routes";
import { programsInfo } from "@/data/demo";

type Params = { slug: string };

export function generateStaticParams() {
  return programsInfo
    .filter((program) => program.slug !== "old-age-home")
    .map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const program = programsInfo.find((item) => item.slug === slug);
  if (!program) return {};
  return createPageMetadata({
    title: program.title,
    description: program.summary,
    path: `/programs/${program.slug}`,
    keywords: [program.title, "Navchetna Charitable Trust"],
  });
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const program = programsInfo.find((item) => item.slug === slug);
  if (!program) notFound();
  const path = `/programs/${program.slug}`;

  return (
    <>
      <PageJsonLd
        title={program.title}
        description={program.summary}
        path={path}
        breadcrumbs={[
          { name: "Programs", path: ROUTES.programs },
          { name: program.title, path },
        ]}
        extras={[
          serviceSchema({
            name: program.title,
            description: program.summary,
            path,
          }),
        ]}
      />
      <PageHero
        breadcrumbs={[
          { label: "Programs", href: ROUTES.programs },
          { label: program.title },
        ]}
        eyebrow={program.impact}
        title={program.title}
        description={program.summary}
        primaryCta={{ label: "Support This Work", href: ROUTES.donate }}
        secondaryCta={{ label: "All Programs", href: ROUTES.programs }}
      />

      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading
            title={`How ${program.title.toLowerCase()} changes lives`}
            description="Your partnership helps us deliver care with dignity, accountability, and local presence across Ahmedabad."
          />
          <Card variant="soft" className="space-y-4">
            <p className="text-muted">
              {program.summary} We coordinate with volunteers, medical partners,
              and community leaders so every rupee and every hour of service
              reaches people who need it most.
            </p>
            <p className="text-muted">
              Want to visit, sponsor, or volunteer for this program? Reach out
              and we will guide you through the next step.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link href={ROUTES.donate}>Donate</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={ROUTES.contact}>Talk to Us</Link>
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <DonateCTA />
    </>
  );
}
