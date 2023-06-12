import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

const desktop = { width: 1280, height: 1024 };
const mobile = { width: 375, height: 812 };

const themes = ['blue', 'gray'];

test.describe('desktop', () => {
    runTest(test, 'base-test', '', false);
    runTest(test, 'exclude-quotes', 'excludequotes=true', false);
    runTest(test, 'no-source', 'nosource=true', false);
    themes.forEach(theme => {
        runTest(test, `theme-${theme}`, `theme=${theme}`, false);
    })
})

test.describe('mobile', () => {
    test.use({ viewport: mobile });
    runTest(test, 'base-test', '', true);
    runTest(test, 'exclude-quotes', 'excludequotes=true', false);
    runTest(test, 'no-source', 'nosource=true', false);
    themes.forEach(theme => {
        runTest(test, `theme-${theme}`, `theme=${theme}`, true);
    })
})

function runTest(test, name, querystring, accessibility) {
    test.describe(name, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-quote/tests/quote.html?${querystring}`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
        if (accessibility) {
            test(`accessibility`, async({page}) => {
                const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
                expect(results.violations).toEqual([]);
            });
        }
    })
}
