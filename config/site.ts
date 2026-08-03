import {
  contactInfo,
  founderInfo,
  trustInfo,
} from "@/data/demo";

/**
 * Site identity from ai/demo-data.md.
 */
export const siteConfig = {
  name: trustInfo.name,
  shortName: trustInfo.shortName,
  tagline: trustInfo.tagline,
  slogan: trustInfo.slogan,
  description: trustInfo.mission,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_IN",
  language: "en",
  founder: founderInfo.name,
  foundingYear: String(trustInfo.established),
  registrationNumber: trustInfo.registration,
  email: contactInfo.email,
  phone: contactInfo.phone,
  emergency: contactInfo.emergency,
  whatsapp: contactInfo.whatsapp,
  officeHours: contactInfo.officeHours,
  address: {
    line1: contactInfo.address.line1,
    line2: contactInfo.address.line2,
    city: contactInfo.address.city,
    state: contactInfo.address.state,
    postalCode: contactInfo.address.postalCode,
    country: contactInfo.address.country,
    full: contactInfo.address.full,
  },
} as const;

export type SiteConfig = typeof siteConfig;
