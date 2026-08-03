import { siteConfig } from "@/config/site";

/**
 * External and utility links.
 */
export const LINKS = {
  googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`,
  annualReport: "/documents/annual-report.pdf",
  privacyEmail: `mailto:${siteConfig.email}`,
  phone: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  emergency: `tel:${siteConfig.emergency.replace(/\s/g, "")}`,
} as const;
