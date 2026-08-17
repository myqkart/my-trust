import { LegalDocument } from "@/components/content/legal-document";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { legalPages } from "@/data/pages";

const page = legalPages.privacy;
const description =
  "Privacy policy for Navchetna Charitable Trust website visitors and supporters.";

export const metadata = createPageMetadata({
  title: page.title,
  description,
  path: ROUTES.privacy,
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={page.title}
      updated={page.updated}
      sections={page.sections}
      breadcrumbLabel="Privacy Policy"
      path={ROUTES.privacy}
      description={description}
    />
  );
}
