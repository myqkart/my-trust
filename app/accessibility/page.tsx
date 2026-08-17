import { LegalDocument } from "@/components/content/legal-document";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { legalPages } from "@/data/pages";

const page = legalPages.accessibility;
const description =
  "Accessibility statement for Navchetna Charitable Trust website.";

export const metadata = createPageMetadata({
  title: page.title,
  description,
  path: ROUTES.accessibility,
});

export default function AccessibilityPage() {
  return (
    <LegalDocument
      title={page.title}
      updated={page.updated}
      sections={page.sections}
      breadcrumbLabel="Accessibility"
      path={ROUTES.accessibility}
      description={description}
    />
  );
}
