import Link from "next/link";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading, Quote } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/common/timeline";
import { SplitLayout } from "@/components/layout";
import { SlideUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { founderInfo, faqInfo, teamInfo, trustInfo } from "@/data/demo";
import { homeTimeline } from "@/data/home";
import { aboutFutureGoals } from "@/data/pages";
import { OptimizedImage } from "@/components/ui/optimized-image";

const aboutDescription =
  "Navchetna Charitable Trust—Service, Support & Humanity since 2009. Founded with the dedication of Shri Rupesh Kumar Modi to support people in need through food, clothing, Bhandara, education, gau seva, and plantation.";

export const metadata = createPageMetadata({
  title: "About",
  description: aboutDescription,
  path: ROUTES.about,
  keywords: ["Navchetna Charitable Trust", "Service Support Humanity", "Charitable Trust Ahmedabad"],
});

export default function AboutPage() {
  return (
    <>
      <PageJsonLd
        title="About"
        description={aboutDescription}
        path={ROUTES.about}
        breadcrumbs={[{ name: "About", path: ROUTES.about }]}
        pageType="AboutPage"
        faqs={[...faqInfo]}
      />
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About Us"
        title="Our journey of service and humanity"
        description="2009 to 2026—one vision, one commitment. From Shree Rudraa Mahadev to the neighbourhood, we serve with respect, support, and hope."
        primaryCta={{ label: "Support Our Mission", href: ROUTES.donate }}
        secondaryCta={{ label: "Meet Our Team", href: "#team" }}
      />

      <Section background="white">
        <SplitLayout
          left={
            <SlideUp>
              <SectionHeading
                eyebrow="Our Story"
                title="Serving society, supporting people in need"
                description={founderInfo.bio}
              />
            </SlideUp>
          }
          right={
            <SlideUp>
              <Card variant="elevated">
                <Quote cite={founderInfo.name}>{founderInfo.message}</Quote>
                <p className="mt-4 text-sm font-semibold text-secondary">
                  {founderInfo.designation}
                </p>
              </Card>
            </SlideUp>
          }
        />
      </Section>

      <Section background="soft">
        <SectionHeading
          align="center"
          eyebrow="Journey"
          title="Milestones of hope"
          description="Every chapter reflects people who chose kindness in action."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <Timeline items={[...homeTimeline]} />
        </div>
      </Section>

      <Section background="white">
        <SectionHeading align="center" eyebrow="Purpose" title="Mission, vision & values" />
        <StaggerChildren className="mt-10 grid gap-6 md:grid-cols-2">
          <StaggerItem>
            <Card variant="soft" className="h-full">
              <CardTitle>Mission</CardTitle>
              <p className="mt-4 text-muted">{trustInfo.mission}</p>
            </Card>
          </StaggerItem>
          <StaggerItem>
            <Card variant="soft" className="h-full">
              <CardTitle>Vision</CardTitle>
              <p className="mt-4 text-muted">{trustInfo.vision}</p>
            </Card>
          </StaggerItem>
        </StaggerChildren>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {trustInfo.values.map((value) => (
            <span
              key={value}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-secondary"
            >
              {value}
            </span>
          ))}
        </div>
      </Section>

      <Section id="team" background="default">
        <SectionHeading
          align="center"
          eyebrow="Leadership"
          title="Our trustees"
          description="The people who steward Navchetna Charitable Trust with service, support, and humanity."
        />
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamInfo.map((member) => (
            <StaggerItem key={member.id}>
              <Card padding="none" className="h-full overflow-hidden text-center">
                <div className="relative aspect-[4/5] bg-soft/40">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_15%]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <CardTitle>{member.name}</CardTitle>
                  <p className="mt-2 text-sm text-muted">{member.role}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Looking Ahead"
          title="Future goals"
          description="We keep growing carefully—never losing the human heart of our work."
        />
        <ul className="mx-auto mt-10 max-w-3xl space-y-4">
          {aboutFutureGoals.map((goal) => (
            <li
              key={goal}
              className="rounded-[var(--radius-card)] border border-border bg-soft/30 px-6 py-4 text-primary"
            >
              {goal}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href={ROUTES.contact}>Talk to Us</Link>
          </Button>
        </div>
      </Section>

      <DonateCTA />
    </>
  );
}
