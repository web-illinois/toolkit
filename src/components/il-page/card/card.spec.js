import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

const themes = ['blue', 'orange', 'gray', 'white', 'blue-gradient'];

test.use({ viewport: { width: 800, height: 600 } });

themes.forEach(theme => {
    test.describe(`theme-${theme}`, () => {

        test(`card`, async ({ page }) => {
            await page.goto(`components/card/tests/card.html?theme=${theme}`);
            await expect(page.getByTestId('card')).toHaveScreenshot();
        })
        test(`card accessibility`, async({page}) => {
            await page.goto(`components/card/tests/card.html?theme=${theme}`);
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        })

        test(`card with image`, async ({ page }) => {
            await page.goto(`components/card/tests/card-with-image.html?theme=${theme}`);
            await expect(page.getByTestId('card')).toHaveScreenshot();
        })
        test(`card with image accessibility`, async({page}) => {
            await page.goto(`components/card/tests/card-with-image.html?theme=${theme}`);
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        })

        test(`link card`, async ({ page }) => {
            await page.goto(`components/card/tests/link-card.html?theme=${theme}`);
            await expect(page.getByTestId('card')).toHaveScreenshot();
        })
        test(`link card accessibility`, async({page}) => {
            await page.goto(`components/card/tests/link-card.html?theme=${theme}`);
            const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
            expect(results.violations).toEqual([]);
        })

    })
})
