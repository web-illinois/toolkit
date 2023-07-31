import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('desktop', () => {
    test.use({ viewport: { name: 'desktop', width: 1200, height: 800 } });
    test.beforeEach(async({page}) => {
        await page.goto(`components/il-hero/tests/hero.html`);
    })
    test(`screenshot`, async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    })
    test(`accessibility`, async({page}) => {
        const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
        expect(results.violations).toEqual([]);
    })
})

test.describe('mobile', () => {
    test.use({ viewport: { name: 'phone', width: 600, height: 800 } });
    test.beforeEach(async({page}) => {
        await page.goto(`components/il-hero/tests/hero.html`);
    })
    test(`screenshot`, async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    })
    test(`accessibility`, async({page}) => {
        const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
        expect(results.violations).toEqual([]);
    })
})
