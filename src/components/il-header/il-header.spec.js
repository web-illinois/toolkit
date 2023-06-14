import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ viewport: { width: 1280, height: 1024 } });

test('empty', async ({ page }) => {
  await page.goto('components/il-header/tests/empty.html');
  await page.waitForTimeout(1);
  await expect(page.getByTestId('header')).toHaveScreenshot();
})

test('links only', async ({ page }) => {
  await page.goto('components/il-header/tests/links-only.html');
  await expect(page.getByTestId('header')).toHaveScreenshot();
})

