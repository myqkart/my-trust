import { describe, expect, it } from "vitest";
import { ROUTES } from "@/constants/routes";
import { programsInfo } from "@/data/demo";
import { blogPosts } from "@/data/pages";
import { sitemapEntries } from "@/lib/seo/sitemap-entries";
import { createPageMetadata } from "@/lib/seo/metadata";

describe("routes & sitemap integrity", () => {
  it("keeps unique route paths", () => {
    const paths = Object.values(ROUTES);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("includes core public pages in the sitemap", () => {
    const sitemapPaths = new Set(sitemapEntries.map((entry) => entry.path));
    expect(sitemapPaths.has(ROUTES.home)).toBe(true);
    expect(sitemapPaths.has(ROUTES.donate)).toBe(true);
    expect(sitemapPaths.has(ROUTES.contact)).toBe(true);
    expect(sitemapPaths.has(ROUTES.privacy)).toBe(true);
  });

  it("includes program and blog detail paths", () => {
    const sitemapPaths = new Set(sitemapEntries.map((entry) => entry.path));
    for (const program of programsInfo) {
      expect(sitemapPaths.has(`/programs/${program.slug}`)).toBe(true);
    }
    for (const post of blogPosts) {
      expect(sitemapPaths.has(`${ROUTES.blog}/${post.slug}`)).toBe(true);
    }
  });

  it("excludes search from sitemap (noindex utility page)", () => {
    const sitemapPaths = new Set(sitemapEntries.map((entry) => entry.path));
    expect(sitemapPaths.has(ROUTES.search)).toBe(false);
  });
});

describe("createPageMetadata", () => {
  it("sets canonical, open graph, and twitter fields", () => {
    const metadata = createPageMetadata({
      title: "Donate",
      description: "Support tree plantation, food, gau seva, and education.",
      path: ROUTES.donate,
      keywords: ["Charitable Trust donation"],
    });

    expect(metadata.alternates?.canonical).toBe(ROUTES.donate);
    expect(metadata.openGraph?.url).toContain("/donate");
    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });

  it("supports noIndex pages", () => {
    const metadata = createPageMetadata({
      title: "Search",
      description: "Search the site",
      path: ROUTES.search,
      noIndex: true,
    });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});
