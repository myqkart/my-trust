import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const criticalRoutes = [
  { path: "/", heading: /service, support & humanity/i },
  { path: "/about", heading: /journey of service and humanity/i },
  { path: "/donate", heading: /kindness becomes daily care/i },
  { path: "/volunteer", heading: /presence is a gift/i },
  { path: "/contact", heading: /love to hear from you/i },
  { path: "/programs", heading: /programs that serve with humanity/i },
  { path: "/privacy", heading: /privacy policy/i },
] as const;

test.beforeEach(async ({ page }) => {
  // Stable DOM for assertions (no staggered opacity/blur reveals).
  await page.emulateMedia({ reducedMotion: "reduce" });
});

for (const route of criticalRoutes) {
  test(`smoke: ${route.path} renders heading and primary chrome`, async ({
    page,
  }) => {
    const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
    expect(response?.ok()).toBeTruthy();

    await expect(
      page.locator("#main-content").getByRole("heading", { level: 1 }),
    ).toContainText(route.heading);

    await expect(page.getByRole("link", { name: /skip to content/i })).toBeAttached();
    await expect(page.locator("#main-content")).toBeVisible();
  });
}

test("forms: donate, volunteer, and contact expose required fields", async ({
  page,
}) => {
  await page.goto("/donate");
  await expect(page.getByLabel(/^name$/i)).toBeVisible();
  await expect(page.getByLabel(/^email$/i)).toBeVisible();

  await page.goto("/volunteer");
  await expect(page.getByLabel(/full name/i)).toBeVisible();
  await expect(page.getByLabel(/^skills$/i)).toBeVisible();

  await page.goto("/contact");
  await expect(page.getByLabel(/^message$/i)).toBeVisible();
});

test("seo: robots and sitemap are available", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain("<urlset");
});

test.describe("accessibility", () => {
  for (const route of ["/", "/donate", "/contact", "/about"] as const) {
    test(`axe: ${route} has no serious/critical violations`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .analyze();

      const serious = results.violations.filter((item) =>
        ["serious", "critical"].includes(item.impact ?? ""),
      );

      expect(
        serious,
        serious.map((item) => `${item.id}: ${item.help}`).join("\n"),
      ).toEqual([]);
    });
  }
});
