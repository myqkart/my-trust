import { siteConfig } from "@/config/site";

/** Build an absolute URL from a path. */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Create a page title using the SEO template. */
export function createPageTitle(title: string): string {
  return `${title} | ${siteConfig.name}`;
}
