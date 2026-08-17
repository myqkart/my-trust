import Link from "next/link";
import { PageHero } from "@/components/hero/page-hero";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/typography";
import { Card, CardTitle } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";

const searchDescription =
  "Search Navchetna Charitable Trust pages, programs, and resources.";

export const metadata = createPageMetadata({
  title: "Search",
  description: searchDescription,
  path: ROUTES.search,
  noIndex: true,
});

const popularLinks = [
  { label: "Tree Plantation", href: "/programs/environment" },
  { label: "Donate", href: ROUTES.donate },
  { label: "Volunteer", href: ROUTES.volunteer },
  { label: "Programs", href: ROUTES.programs },
  { label: "Reports", href: ROUTES.reports },
  { label: "Contact", href: ROUTES.contact },
] as const;

export default function SearchPage() {
  return (
    <>
      <PageJsonLd
        title="Search"
        description={searchDescription}
        path={ROUTES.search}
        breadcrumbs={[{ name: "Search", path: ROUTES.search }]}
      />
      <PageHero
        breadcrumbs={[{ label: "Search" }]}
        eyebrow="Find"
        title="Search the site"
        description="Full-text search can be connected later. Start with popular destinations below."
      />

      <Section background="white">
        <SectionHeading
          align="center"
          title="Popular destinations"
          description="Quick links while search indexing is prepared."
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {popularLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Card className="transition-shadow hover:shadow-[var(--shadow-soft-md)]">
                <CardTitle className="text-lg">{link.label}</CardTitle>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
