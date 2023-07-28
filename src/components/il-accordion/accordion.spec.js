import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ viewport: { width: 1200, height: 800 }});

test.describe(`base`, () => {
    test.beforeEach(async({page}) => {
        await page.goto('components/il-accordion/tests/accordion.html');
    })
    test('it has a screenshot', async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    })
});

test.describe(`white`, () => {
    test.beforeEach(async({page}) => {
        await page.goto('components/il-accordion/tests/accordion.html?theme=white');
    })
    test('it has a screenshot', async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    })
});

test.describe(`fixed-width`, () => {
    test.beforeEach(async({page}) => {
        await page.goto('components/il-accordion/tests/accordion.html?fixed');
    })

    test('it has a screenshot', async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    })
});