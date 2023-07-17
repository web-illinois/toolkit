import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

const desktop = { width: 1280, height: 1024 };
const mobile = { width: 375, height: 812 };

test.describe('desktop', () => {
    test.use({ viewport: desktop });
    test.describe('base-test', () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-feature/tests/feature.html`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
        test(`accessibility`, async({page}) => {
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        });
    });

    test.describe('background', () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-feature/tests/feature.html?background`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
        test(`accessibility`, async({page}) => {
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        });
    });

    test.describe('smallview', () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-feature/tests/feature.html?mobile`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
        test(`accessibility`, async({page}) => {
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        });
    });
});

test.describe('mobile', () => {
    test.use({ viewport: mobile });
    test.describe('base-test', () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-feature/tests/feature.html`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
        test(`accessibility`, async({page}) => {
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        });
    });

    test.describe('background', () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-feature/tests/feature.html?background`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
        test(`accessibility`, async({page}) => {
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        });
    });

    test.describe('smallview', () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-feature/tests/feature.html?mobile`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
        test(`accessibility`, async({page}) => {
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        });
    });
})