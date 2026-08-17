import { PageHero } from "@/components/hero/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { SplitLayout } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { contactInfo, faqInfo } from "@/data/demo";

const contactDescription =
  "Reach Navchetna Charitable Trust in Ahmedabad—call, email, or visit our office on Ashram Road.";

export const metadata = createPageMetadata({
  title: "Contact",
  description: contactDescription,
  path: ROUTES.contact,
  keywords: ["Navchetna Charitable Trust contact", "NGO Ahmedabad"],
});

export default function ContactPage() {
  return (
    <>
      <PageJsonLd
        title="Contact"
        description={contactDescription}
        path={ROUTES.contact}
        breadcrumbs={[{ name: "Contact", path: ROUTES.contact }]}
        pageType="ContactPage"
        faqs={[...faqInfo]}
      />
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Get in Touch"
        title="We’d love to hear from you"
        description="Questions about visits, volunteering, or how to help—reach out anytime."
      />

      <Section background="white">
        <SplitLayout
          align="start"
          left={
            <>
              <SectionHeading
                eyebrow="Visit & Reach"
                title="Ahmedabad office"
                description={contactInfo.officeHours}
              />
              <div className="mt-8 space-y-4">
                <Card>
                  <CardTitle className="text-base">Address</CardTitle>
                  <p className="mt-2 text-muted">{contactInfo.address.full}</p>
                </Card>
                <Card>
                  <CardTitle className="text-base">Phone</CardTitle>
                  <p className="mt-2 text-muted">{contactInfo.phone}</p>
                </Card>
                <Card>
                  <CardTitle className="text-base">Email</CardTitle>
                  <p className="mt-2 text-muted">{contactInfo.email}</p>
                </Card>
              </div>
            </>
          }
          right={
            <Card variant="elevated" padding="lg">
              <h2 className="font-heading mb-6 text-2xl font-semibold text-primary">
                Send a message
              </h2>
              <ContactForm />
            </Card>
          }
        />
      </Section>
    </>
  );
}
