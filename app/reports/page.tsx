import Link from "next/link";
import { PageHero } from "@/components/hero/page-hero";
import { DonateCTA } from "@/components/cta/section-cta";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { faqInfo } from "@/data/demo";
import { reportDocuments } from "@/data/pages";

const reportsDescription =
  "Documents and updates from Navchetna Charitable Trust—reach us for reports and giving details.";

export const metadata = createPageMetadata({
  title: "Reports & Documents",
  description: reportsDescription,
  path: ROUTES.reports,
  keywords: ["NGO annual report", "Charitable Trust Ahmedabad"],
});

export default function ReportsPage() {
  return (
    <>
      <PageJsonLd
        title="Reports & Documents"
        description={reportsDescription}
        path={ROUTES.reports}
        breadcrumbs={[{ name: "Reports", path: ROUTES.reports }]}
        pageType="CollectionPage"
        faqs={[...faqInfo]}
      />
      <PageHero
        breadcrumbs={[{ label: "Reports" }]}
        eyebrow="Transparency"
        title="Reports & compliance documents"
        description="Open books build trust. Explore our reports and registrations."
        primaryCta={{ label: "Contact Us", href: ROUTES.contact }}
        secondaryCta={{ label: "Donate", href: ROUTES.donate }}
      />

      <Section background="white">
        <SectionHeading
          align="center"
          eyebrow="Library"
          title="Documents for donors & well-wishers"
          description="Ask us for verified documents. Links below connect you to giving, volunteering, and our office."
        />
        <StaggerChildren className="mt-12 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reportDocuments.map((doc) => (
            <StaggerItem key={doc.title} className="h-full min-w-0">
              <Card className="flex h-full flex-col">
                <Badge variant="soft" className="w-fit">
                  {doc.category}
                </Badge>
                <CardTitle className="mt-3">{doc.title}</CardTitle>
                <p className="mt-2 text-sm text-muted">Issued {doc.issuedAt}</p>
                <div className="mt-auto pt-6">
                  <Button asChild variant="secondary" fullWidth>
                    <Link href={doc.href}>View Document</Link>
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <DonateCTA />
    </>
  );
}
