import { test, expect } from "../playwright-fixture";

test.describe("Home Page", () => {
  test("should load and display main sections", async ({ page }) => {
    await page.goto("/");
    
    // Should show app name
    await expect(page.locator("text=PULSO")).toBeVisible({ timeout: 15000 });
    
    // Should show search bar
    await expect(page.getByPlaceholder(/buscar|pesquisar/i)).toBeVisible();
    
    // Should show emergency shortcuts
    await expect(page.locator("text=PCR")).toBeVisible();
  });

  test("should navigate to protocols", async ({ page }) => {
    await page.goto("/");
    
    // Click on protocols module
    const protocolLink = page.locator("text=Protocolos").first();
    await protocolLink.click();
    
    await expect(page).toHaveURL(/full-protocols/);
  });

  test("should navigate to emergency mode", async ({ page }) => {
    await page.goto("/");
    
    const emergencyLink = page.locator("text=Emergência").first();
    await emergencyLink.click();
    
    await expect(page).toHaveURL(/emergency/);
  });
});

test.describe("Search", () => {
  test("should show results when typing", async ({ page }) => {
    await page.goto("/");
    
    const searchInput = page.getByPlaceholder(/buscar|pesquisar/i);
    await searchInput.fill("sepse");
    
    // Should show search results
    await expect(page.locator("[class*=search] >> text=/sepse/i").first()).toBeVisible({ timeout: 5000 });
  });
});

test.describe("Protocol Detail", () => {
  test("should load a protocol page", async ({ page }) => {
    await page.goto("/full-protocols");
    
    // Wait for list to load
    await page.waitForTimeout(3000);
    
    // Click first protocol
    const firstProtocol = page.locator("a[href*='/full-protocols/']").first();
    if (await firstProtocol.isVisible()) {
      await firstProtocol.click();
      
      // Should show protocol content with tabs
      await expect(page.locator("[role=tablist]")).toBeVisible({ timeout: 10000 });
    }
  });
});

test.describe("Navigation", () => {
  test("should have bottom nav on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    
    // Bottom nav should be visible
    await expect(page.locator("nav").last()).toBeVisible();
  });

  test("should navigate to calculators", async ({ page }) => {
    await page.goto("/calculators");
    await expect(page.locator("text=/calculadora/i").first()).toBeVisible({ timeout: 10000 });
  });
});
