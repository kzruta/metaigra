import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/test/');
  const elem = page.locator('#set-content');
  await expect(elem).toHaveCount(1);
  await expect(elem).toHaveText('HELLO 2.0');
});


test('another test', async ({ page }) => {
  await page.goto('/sample-text/');
  const elem = page.locator('#set-content');
  await expect(elem).toHaveCount(0);
});