import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: seoConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6fafd",
    theme_color: "#0a1931",
    lang: siteConfig.language,
    categories: ["nonprofit", "charity", "social"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
