import { siteConfig } from "@/config/site";
import { socialConfig } from "@/config/social";
import { seoConfig } from "@/config/seo";
import { absoluteUrl } from "@/utils/seo";

export type JsonLd = Record<string, unknown>;

interface BreadcrumbInput {
  name: string;
  path: string;
}

interface WebPageInput {
  name: string;
  description: string;
  path: string;
  type?:
    | "WebPage"
    | "AboutPage"
    | "ContactPage"
    | "CollectionPage"
    | "ImageGallery"
    | "FAQPage";
}

interface FaqInput {
  question: string;
  answer: string;
}

interface ArticleInput {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  category?: string;
}

interface EventInput {
  name: string;
  description: string;
  startDate: string;
  location: string;
  path?: string;
}

interface ServiceInput {
  name: string;
  description: string;
  path: string;
}

/** Organization schema from seo.md. */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/og/default.png"),
    image: absoluteUrl(seoConfig.openGraph.images[0].url),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundingYear,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    identifier: siteConfig.registrationNumber,
    slogan: siteConfig.slogan,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Ahmedabad",
    },
    sameAs: [
      socialConfig.facebook,
      socialConfig.instagram,
      socialConfig.youtube,
      socialConfig.linkedin,
      socialConfig.twitter,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    ],
  };
}

/** WebSite schema with optional site search. */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: seoConfig.description,
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    inLanguage: siteConfig.language,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/search")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Generic / typed WebPage schema. */
export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: WebPageInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#organization` },
    inLanguage: siteConfig.language,
  };
}

/** BreadcrumbList for every non-home page. */
export function breadcrumbSchema(items: BreadcrumbInput[]): JsonLd {
  const list = [
    { name: "Home", path: "/" },
    ...items,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage schema for key conversion pages. */
export function faqSchema(items: FaqInput[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Blog Article schema. */
export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  category,
}: ArticleInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    mainEntityOfPage: absoluteUrl(path),
    articleSection: category,
    inLanguage: siteConfig.language,
  };
}

/** Event schema for upcoming gatherings. */
export function eventSchema({
  name,
  description,
  startDate,
  location,
  path = "/events",
}: EventInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        addressCountry: "IN",
      },
    },
    organizer: { "@id": `${absoluteUrl("/")}#organization` },
    url: absoluteUrl(path),
  };
}

/** Service schema for program detail pages. */
export function serviceSchema({
  name,
  description,
  path,
}: ServiceInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: {
      "@type": "City",
      name: siteConfig.address.city,
    },
  };
}

/** DonateAction hint for donation landing pages. */
export function donateActionSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: `Donate to ${siteConfig.name}`,
    target: absoluteUrl("/donate"),
    recipient: { "@id": `${absoluteUrl("/")}#organization` },
  };
}
