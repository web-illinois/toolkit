import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ viewport: { width: 1280, height: 1024 } });

test('base', async ({ page }) => {
    await page.goto('components/il-nav/tests/base.html');
    await expect(page.getByTestId('nav')).toHaveScreenshot();
})

test('base in columns', async ({ page }) => {
    await page.goto('components/il-nav/tests/base--columns.html');
    await expect(page.getByTestId('nav')).toHaveScreenshot();
})

test('bar', async ({ page }) => {
    await page.goto('components/il-nav/tests/bar.html');
    await expect(page).toHaveScreenshot();
})

test('accordion', async ({ page }) => {
    await page.goto('components/il-nav/tests/accordion.html');
    await expect(page.getByTestId('nav')).toHaveScreenshot();
})
