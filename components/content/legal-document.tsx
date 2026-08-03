import { PageHero } from "@/components/hero/page-hero";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { CenteredLayout } from "@/components/layout";

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalDocumentProps {
  title: string;
  updated: string;
  sections: readonly LegalSection[];
  breadcrumbLabel: string;
  path: string;
  description: string;
}

/** Shared shell for privacy, terms, refund, cookies, accessibility. */
export function LegalDocument({
  title,
  updated,
  sections,
  breadcrumbLabel,
  path,
  description,
}: LegalDocumentProps) {
  return (
    <>
      <PageJsonLd
        title={title}
        description={description}
        path={path}
        breadcrumbs={[{ name: breadcrumbLabel, path }]}
      />
      <PageHero
        breadcrumbs={[{ label: breadcrumbLabel }]}
        eyebrow="Legal"
        title={title}
        description={`Last updated ${updated}.`}
      />
      <CenteredLayout narrow className="bg-background">
        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-heading text-2xl font-semibold text-primary">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </CenteredLayout>
    </>
  );
}
