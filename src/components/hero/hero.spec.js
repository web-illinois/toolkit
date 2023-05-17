import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

const themes = ['il-theme-blue', 'il-theme-orange'];

test.use({ viewport: { width: 1200, height: 800 }});

test.beforeEach(async({page}) => {
    await page.goto('components/hero/hero.html');
})

themes.forEach(theme => {
    test.describe(`${theme} theme`, )

    test(`it matches the reference image for the ${theme} theme`, async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    })

    test(`it is accessible with the ${theme} theme`, async({page}) => {
        const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
        expect(results.violations).toEqual([]);
    })

})
