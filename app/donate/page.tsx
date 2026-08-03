import { PageHero } from "@/components/hero/page-hero";
import { DonationForm } from "@/components/forms/donation-form";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { SplitLayout } from "@/components/layout";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { donateActionSchema } from "@/lib/seo/json-ld";
import { ROUTES } from "@/constants/routes";
import { donationPlans, faqInfo, trustBadgesInfo } from "@/data/demo";

const donateDescription =
  "Support Anandam Seva Foundation with secure donations—meals, medicines, resident sponsorship, and community care. 80G eligible.";

export const metadata = createPageMetadata({
  title: "Donate",
  description: donateDescription,
  path: ROUTES.donate,
  keywords: ["Donation for Elderly", "80G NGO Ahmedabad"],
});

export default function DonatePage() {
  return (
    <>
      <PageJsonLd
        title="Donate"
        description={donateDescription}
        path={ROUTES.donate}
        breadcrumbs={[{ name: "Donate", path: ROUTES.donate }]}
        faqs={[...faqInfo]}
        extras={[donateActionSchema()]}
      />
      <PageHero
        breadcrumbs={[{ label: "Donate" }]}
        eyebrow="Give With Confidence"
        title="Your kindness becomes daily care"
        description="Sponsor a meal, medicines, or a resident. Every contribution is directed with transparency."
      />

      <Section background="white">
        <SplitLayout
          align="start"
          left={
            <>
              <SectionHeading
                eyebrow="Choose Impact"
                title="Suggested giving options"
                description="Select a plan that matches your intention—or give any amount."
              />
              <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2">
                {donationPlans.map((plan) => (
                  <StaggerItem key={plan.id}>
                    <Card className="h-full">
                      <CardTitle className="text-lg">{plan.label}</CardTitle>
                      <p className="mt-2 font-number text-2xl font-bold text-accent">
                        {plan.amountLabel}
                      </p>
                      <p className="mt-2 text-sm text-muted">{plan.impact}</p>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustBadgesInfo.slice(0, 4).map((badge) => (
                  <p key={badge.label} className="text-sm text-muted">
                    <span className="font-semibold text-secondary">
                      {badge.label}:
                    </span>{" "}
                    {badge.description}
                  </p>
                ))}
              </div>
            </>
          }
          right={
            <Card variant="elevated" padding="md" className="sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
                Donation form
              </h2>
              <p className="mt-2 mb-6 text-sm text-muted">
                Demo checkout flow—connect your payment gateway when ready.
              </p>
              <DonationForm />
            </Card>
          }
        />
      </Section>
    </>
  );
}
