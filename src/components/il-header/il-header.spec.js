import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ viewport: { width: 1280, height: 1024 } });

test('collapses below 990px', async ({page}) => {
  await page.setViewportSize({ width: 990, height: 800});
  await page.goto('components/il-header/tests/header.html');
  await expect(page.getByRole('button', { name: 'Menu' })).toBeHidden();
  await expect(page.getByTestId('search')).toBeVisible();

  await page.setViewportSize({ width: 989, height: 800});
  await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible();
  await expect(page.getByTestId('search')).toBeHidden();
});

test('campus wordmark disappears below 550px', async ({page}) => {
  await page.setViewportSize({ width: 550, height: 800});
  await page.goto('components/il-header/tests/header.html');
  await expect(page.getByText('University of Illinois Urbana-Champaign')).toBeVisible();
  await page.setViewportSize({ width: 549, height: 800});
  await expect(page.getByText('University of Illinois Urbana-Champaign')).toBeHidden();
});

test('primary unit disappears below 550px', async ({page}) => {
  await page.setViewportSize({ width: 550, height: 800});
  await page.goto('components/il-header/tests/header.html');
  await expect(page.getByText('College of Malkovich Malkovich')).toBeVisible();
  await page.setViewportSize({ width: 549, height: 800});
  await expect(page.getByText('College of Malkovich Malkovich')).toBeHidden();
});

test('clicking the menu toggle shows the menu', async ({page}) => {
  await page.setViewportSize({ width: 549, height: 800});
  await page.goto('components/il-header/tests/header.html');
  await page.getByRole('button', { name: 'Menu'}).click();
  await expect(page.getByTestId('search')).toBeVisible();
})