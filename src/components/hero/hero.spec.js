import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.beforeEach(async({page}) => {
    await page.goto('components/hero/hero.html');
})

test('it has a screenshot', async ({ page }) => {
    await expect(page.getByTestId('component')).toHaveScreenshot();
})

test('it is accessible', async({page}) => {
    const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
    expect(results.violations).toEqual([]);
})