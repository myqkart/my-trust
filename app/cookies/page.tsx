import { LegalDocument } from "@/components/content/legal-document";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { legalPages } from "@/data/pages";

const page = legalPages.cookies;
const description = "Cookie policy for Navchetna Charitable Trust website.";

export const metadata = createPageMetadata({
  title: page.title,
  description,
  path: ROUTES.cookies,
});

export default function CookiesPage() {
  return (
    <LegalDocument
      title={page.title}
      updated={page.updated}
      sections={page.sections}
      breadcrumbLabel="Cookie Policy"
      path={ROUTES.cookies}
      description={description}
    />
  );
}
