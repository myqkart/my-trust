import { LegalDocument } from "@/components/content/legal-document";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/constants/routes";
import { legalPages } from "@/data/pages";

const page = legalPages.refund;
const description = "Donation refund policy for Anandam Seva Foundation.";

export const metadata = createPageMetadata({
  title: page.title,
  description,
  path: ROUTES.refund,
});

export default function RefundPage() {
  return (
    <LegalDocument
      title={page.title}
      updated={page.updated}
      sections={page.sections}
      breadcrumbLabel="Refund Policy"
      path={ROUTES.refund}
      description={description}
    />
  );
}
