import { LegalDocument } from "@/components/content/legal-document";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { legalPages } from "@/data/pages";

const page = legalPages.terms;
const description = "Terms of use for the Anandam Seva Foundation website.";

export const metadata = createPageMetadata({
  title: page.title,
  description,
  path: ROUTES.terms,
});

export default function TermsPage() {
  return (
    <LegalDocument
      title={page.title}
      updated={page.updated}
      sections={page.sections}
      breadcrumbLabel="Terms of Use"
      path={ROUTES.terms}
      description={description}
    />
  );
}
