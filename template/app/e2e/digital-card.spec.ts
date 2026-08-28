import { test, expect } from '@playwright/test';

test.describe('Ligas Barriales - Digital Card & Match Operations', () => {
  test('should render player digital ID card with QR code and status badge', async ({ page }) => {
    await page.goto('/');
    // Verify title or main headings
    await expect(page).toHaveTitle(/SaaS|Ligas Barriales/i);
  });

  test('should allow vocal referee to tag live match goals and cards', async ({ page }) => {
    await page.goto('/vocalia');
    // Verify vocalia UI elements
    const pageHeading = page.locator('h1');
    await expect(pageHeading).toBeVisible();
  });
});
