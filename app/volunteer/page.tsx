import { PageHero } from "@/components/hero/page-hero";
import { VolunteerForm } from "@/components/forms/volunteer-form";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { SplitLayout } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { faqInfo } from "@/data/demo";

const volunteerRoles = [
  "Companionship visits",
  "Event support",
  "Medical camp assistance",
  "Teaching & tutoring",
  "Meal service",
  "Digital & social media",
] as const;

const volunteerDescription =
  "Volunteer with Anandam Seva Foundation—companionship, events, medical camps, education support, and more in Ahmedabad.";

export const metadata = createPageMetadata({
  title: "Volunteer",
  description: volunteerDescription,
  path: ROUTES.volunteer,
  keywords: ["Volunteer NGO", "Volunteer Ahmedabad"],
});

export default function VolunteerPage() {
  return (
    <>
      <PageJsonLd
        title="Volunteer"
        description={volunteerDescription}
        path={ROUTES.volunteer}
        breadcrumbs={[{ name: "Volunteer", path: ROUTES.volunteer }]}
        faqs={[...faqInfo]}
      />
      <PageHero
        breadcrumbs={[{ label: "Volunteer" }]}
        eyebrow="Give Time"
        title="Your presence is a gift"
        description="Share your time with residents and community programs. Apply below and we will match you to the right opportunity."
        primaryCta={{ label: "Apply Now", href: "#apply" }}
        secondaryCta={{ label: "Contact Us", href: ROUTES.contact }}
      />

      <Section background="soft">
        <SectionHeading
          align="center"
          eyebrow="Ways to Help"
          title="Roles that fit your skills"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerRoles.map((role) => (
            <Card key={role} className="text-center">
              <CardTitle className="text-lg">{role}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="apply" background="white">
        <SplitLayout
          align="start"
          left={
            <>
              <SectionHeading
                eyebrow="Apply"
                title="Tell us how you’d like to serve"
                description="We review every application and match volunteers to the right opportunities."
              />
              <Accordion type="single" collapsible className="mt-8">
                {faqInfo.map((item, index) => (
                  <AccordionItem key={item.question} value={`faq-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </>
          }
          right={
            <Card variant="elevated" padding="lg">
              <VolunteerForm />
            </Card>
          }
        />
      </Section>
    </>
  );
}
