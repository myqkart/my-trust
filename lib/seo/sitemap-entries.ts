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
  lastModified?: string;
}

/** Latest blog publish date — used as a stable content freshness signal. */
const latestBlogDate: string = blogPosts.reduce<string>((latest, post) => {
  return post.publishedAt > latest ? post.publishedAt : latest;
}, blogPosts[0]?.publishedAt ?? "2026-01-01");

/** Canonical public routes for sitemap.xml (excludes search / private). */
export const sitemapEntries: SitemapEntry[] = [
  { path: ROUTES.home, changeFrequency: "weekly", priority: 1, lastModified: latestBlogDate },
  { path: ROUTES.about, changeFrequency: "monthly", priority: 0.9, lastModified: latestBlogDate },
  { path: ROUTES.programs, changeFrequency: "weekly", priority: 0.9, lastModified: latestBlogDate },
  { path: ROUTES.donate, changeFrequency: "weekly", priority: 0.95, lastModified: latestBlogDate },
  { path: ROUTES.volunteer, changeFrequency: "weekly", priority: 0.9, lastModified: latestBlogDate },
  { path: ROUTES.impact, changeFrequency: "monthly", priority: 0.85, lastModified: latestBlogDate },
  { path: ROUTES.stories, changeFrequency: "monthly", priority: 0.8, lastModified: latestBlogDate },
  { path: ROUTES.gallery, changeFrequency: "monthly", priority: 0.75, lastModified: latestBlogDate },
  { path: ROUTES.events, changeFrequency: "weekly", priority: 0.8, lastModified: latestBlogDate },
  { path: ROUTES.reports, changeFrequency: "monthly", priority: 0.8, lastModified: latestBlogDate },
  { path: ROUTES.blog, changeFrequency: "weekly", priority: 0.8, lastModified: latestBlogDate },
  { path: ROUTES.contact, changeFrequency: "monthly", priority: 0.85, lastModified: latestBlogDate },
  { path: ROUTES.privacy, changeFrequency: "yearly", priority: 0.2, lastModified: "2026-01-01" },
  { path: ROUTES.terms, changeFrequency: "yearly", priority: 0.2, lastModified: "2026-01-01" },
  { path: ROUTES.refund, changeFrequency: "yearly", priority: 0.2, lastModified: "2026-01-01" },
  { path: ROUTES.cookies, changeFrequency: "yearly", priority: 0.2, lastModified: "2026-01-01" },
  { path: ROUTES.accessibility, changeFrequency: "yearly", priority: 0.2, lastModified: "2026-01-01" },
  ...programsInfo.map((program) => ({
    path: `/programs/${program.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    lastModified: latestBlogDate,
  })),
  ...blogPosts.map((post) => ({
    path: `${ROUTES.blog}/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.65,
    lastModified: post.publishedAt,
  })),
];

export function sitemapUrls() {
  return sitemapEntries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date(entry.lastModified ?? latestBlogDate),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
