import type { MetadataRoute } from "next";
import { sitemapUrls } from "@/lib/seo/sitemap-entries";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapUrls();
}
