import { expect, test } from "@playwright/test";

test("renders the landing page with required sections and WhatsApp CTA", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Corte, barba e presença",
  );
  await expect(
    page.getByRole("heading", { name: "O básico bem feito" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Fale direto com a barbearia." }),
  ).toBeVisible();

  const whatsappLinks = page.locator('a[href^="https://wa.me/"]');
  await expect(whatsappLinks).toHaveCount(3);
  await expect(whatsappLinks.first()).toHaveAttribute("target", "_blank");

  await expect(page.locator("form")).toHaveCount(0);
});

test("keeps navigation and scroll-driven motion available", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Localização", exact: true })
    .click();
  await expect(page.locator("#localizacao")).toBeInViewport();

  const animationTimeline = await page
    .locator(".scroll-rail__fill")
    .evaluate((element) => {
      return window.getComputedStyle(element).animationTimeline;
    });

  expect(animationTimeline).toContain("scroll");
});

test("supports reduced motion preferences", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator(".scroll-rail")).toBeHidden();
  await expect(page.locator(".reveal").first()).toHaveCSS("opacity", "1");
});
