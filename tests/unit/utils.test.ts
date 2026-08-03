import { describe, expect, it } from "vitest";
import { cn } from "@/utils/cn";
import { formatCurrency, formatNumber } from "@/utils/format";
import { slugify } from "@/utils/slug";
import { absoluteUrl, createPageTitle } from "@/utils/seo";
import { siteConfig } from "@/config/site";

describe("cn", () => {
  it("merges conflicting Tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});

describe("format helpers", () => {
  it("formats INR currency without decimals", () => {
    expect(formatCurrency(1100)).toContain("1,100");
  });

  it("formats Indian-grouped numbers", () => {
    expect(formatNumber(485000)).toBe("4,85,000");
  });
});

describe("slugify", () => {
  it("creates kebab-case slugs", () => {
    expect(slugify(" Old Age Home ")).toBe("old-age-home");
    expect(slugify("Healthy Ageing & Dignity!")).toBe("healthy-ageing-dignity");
  });
});

describe("seo utils", () => {
  it("builds absolute URLs", () => {
    expect(absoluteUrl("/about")).toBe(`${siteConfig.url.replace(/\/$/, "")}/about`);
    expect(absoluteUrl("donate")).toBe(`${siteConfig.url.replace(/\/$/, "")}/donate`);
  });

  it("builds page titles", () => {
    expect(createPageTitle("Donate")).toBe(`Donate | ${siteConfig.name}`);
  });
});
