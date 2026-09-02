import { expect, test } from "@playwright/test";

test("renders the landing page with required sections, logo and WhatsApp CTA", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("img", { name: "Barbearia Corte Nobre" }),
  ).toHaveCount(2);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Corte masculino, barba clássica",
  );
  await expect(
    page.getByRole("heading", { name: "O essencial, executado como ritual." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Rua dos Andradas, 240." }),
  ).toBeVisible();

  const whatsappLinks = page.locator('a[href^="https://wa.me/"]');
  await expect(whatsappLinks).toHaveCount(3);
  await expect(whatsappLinks.first()).toHaveAttribute("target", "_blank");

  await expect(page.locator("form")).toHaveCount(0);
});

test("opens with a full-screen photographic cover and reveals content on scroll", async ({
  page,
}) => {
  await page.goto("/");

  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();

  const coverBox = await page.locator(".cover-hero").boundingBox();
  expect(coverBox?.height).toBeGreaterThanOrEqual(
    (viewport?.height ?? 0) * 0.95,
  );

  await expect(page.locator(".cover-hero__image")).toHaveAttribute(
    "fetchpriority",
    "high",
  );

  const titleTop = await page.locator("#hero-title").evaluate((element) => {
    return element.getBoundingClientRect().top;
  });
  expect(titleTop).toBeGreaterThan((viewport?.height ?? 0) * 0.84);

  const servicesTop = await page.locator("#servicos").evaluate((element) => {
    return element.getBoundingClientRect().top;
  });
  expect(servicesTop).toBeGreaterThan((viewport?.height ?? 0) * 1.2);

  const animationTimeline = await page
    .locator(".cover-hero__image")
    .evaluate((element) => {
      return window.getComputedStyle(element).animationTimeline;
    });

  expect(animationTimeline).toContain("scroll");

  await page.evaluate(() => window.scrollTo(0, window.innerHeight));
  await expect(page.locator("#hero-title")).toBeInViewport();

  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Localização", exact: true })
    .click();
  await expect(page.locator("#localizacao")).toBeInViewport();
});

test("supports reduced motion preferences", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const transform = await page
    .locator(".cover-hero__image")
    .evaluate((element) => {
      return window.getComputedStyle(element).transform;
    });

  expect(["none", "matrix(1, 0, 0, 1, 0, 0)"]).toContain(transform);
  await expect(page.locator(".reveal").first()).toHaveCSS("opacity", "1");
});
