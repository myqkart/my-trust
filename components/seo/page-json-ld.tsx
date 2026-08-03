import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
  type JsonLd as JsonLdObject,
} from "@/lib/seo/json-ld";

interface PageJsonLdProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
  pageType?:
    | "WebPage"
    | "AboutPage"
    | "ContactPage"
    | "CollectionPage"
    | "ImageGallery"
    | "FAQPage";
  faqs?: Array<{ question: string; answer: string }>;
  extras?: JsonLdObject[];
}

/** Composes WebPage + Breadcrumb (+ optional FAQ/extra) JSON-LD for a page. */
export function PageJsonLd({
  title,
  description,
  path,
  breadcrumbs = [],
  pageType = "WebPage",
  faqs,
  extras = [],
}: PageJsonLdProps) {
  const graph: JsonLdObject[] = [
    webPageSchema({ name: title, description, path, type: pageType }),
  ];

  if (breadcrumbs.length > 0) {
    graph.push(breadcrumbSchema(breadcrumbs));
  }

  if (faqs && faqs.length > 0) {
    graph.push(faqSchema(faqs));
  }

  graph.push(...extras);

  return <JsonLd data={graph} />;
}
