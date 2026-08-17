import { socialInfo } from "@/data/demo";

/**
 * Social profile links from ai/demo-data.md.
 */
export const socialConfig = {
  facebook: socialInfo.facebook,
  instagram: socialInfo.instagram,
  twitter: socialInfo.twitter,
  linkedin: socialInfo.linkedin,
  youtube: socialInfo.youtube,
  whatsapp: socialInfo.whatsapp,
} as const;

export const socialLinks = [
  { name: "Facebook", href: socialConfig.facebook },
  { name: "Instagram", href: socialConfig.instagram },
  { name: "Twitter", href: socialConfig.twitter },
  { name: "LinkedIn", href: socialConfig.linkedin },
  { name: "YouTube", href: socialConfig.youtube },
].filter((link) => link.href && link.href !== "#");
