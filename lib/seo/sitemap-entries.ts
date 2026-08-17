import { ROUTES } from "@/constants/routes";
import { programsInfo } from "@/data/demo";
import { blogPosts } from "@/data/pages";
import { absoluteUrl } from "@/utils/seo";

export interface SitemapEntry {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

/** Canonical public routes for sitemap.xml (excludes admin/private). */
export const sitemapEntries: SitemapEntry[] = [
  { path: ROUTES.home, changeFrequency: "weekly", priority: 1 },
  { path: ROUTES.about, changeFrequency: "monthly", priority: 0.9 },
  { path: ROUTES.programs, changeFrequency: "weekly", priority: 0.9 },
  { path: ROUTES.donate, changeFrequency: "weekly", priority: 0.95 },
  { path: ROUTES.volunteer, changeFrequency: "weekly", priority: 0.9 },
  { path: ROUTES.impact, changeFrequency: "monthly", priority: 0.85 },
  { path: ROUTES.stories, changeFrequency: "monthly", priority: 0.8 },
  { path: ROUTES.gallery, changeFrequency: "monthly", priority: 0.75 },
  { path: ROUTES.events, changeFrequency: "weekly", priority: 0.8 },
  { path: ROUTES.reports, changeFrequency: "monthly", priority: 0.8 },
  { path: ROUTES.blog, changeFrequency: "weekly", priority: 0.8 },
  { path: ROUTES.contact, changeFrequency: "monthly", priority: 0.85 },
  { path: ROUTES.privacy, changeFrequency: "yearly", priority: 0.2 },
  { path: ROUTES.terms, changeFrequency: "yearly", priority: 0.2 },
  { path: ROUTES.refund, changeFrequency: "yearly", priority: 0.2 },
  { path: ROUTES.cookies, changeFrequency: "yearly", priority: 0.2 },
  { path: ROUTES.accessibility, changeFrequency: "yearly", priority: 0.2 },
  ...programsInfo.map((program) => ({
      path: `/programs/${program.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ...blogPosts.map((post) => ({
    path: `${ROUTES.blog}/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  })),
];

export function sitemapUrls() {
  return sitemapEntries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
