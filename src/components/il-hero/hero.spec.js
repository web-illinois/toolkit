import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

const desktop = { width: 1280, height: 1024 };
const iphone = { width: 375, height: 812 };
const hdtv = { width: 1920, height: 1080 };

const viewports = [
    { name: 'desktop', width: 1200, height: 800 },
    { name: 'phone', width: 600, height: 800 }
];
const themes = ['blue', 'orange'];
const alignments = {
    x: ['left', 'center', 'right'],
    y: ['top', 'center', 'bottom']
};

test.describe('desktop', () => {
    test.use({ viewport: desktop });
    themes.forEach(theme => {
        test.describe(`theme-${theme}`, () => {
            test.beforeEach(async({page}) => {
                await page.goto(`components/hero/tests/hero.html?theme=${theme}`);
            })
            test(`screenshot`, async ({ page }) => {
                await expect(page.getByTestId('component')).toHaveScreenshot();
            })
            test(`accessibility`, async({page}) => {
                const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
                expect(results.violations).toEqual([]);
            })
        })
    })
})

test.describe('mobile', () => {
    test.use({ viewport: iphone });
    themes.forEach(theme => {
        test.describe(`theme-${theme}`, () => {
            test.beforeEach(async({page}) => {
                await page.goto(`components/hero/tests/hero.html?theme=${theme}`);
            })
            test(`screenshot`, async ({ page }) => {
                await expect(page.getByTestId('component')).toHaveScreenshot();
            })
            test(`accessibility`, async({page}) => {
                const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
                expect(results.violations).toEqual([]);
            })
        })
    })
})

alignments.x.forEach(alignX => {
    alignments.y.forEach(alignY => {
        test.use({viewport: desktop});
        test(`align-${alignX}-${alignY}`, async({page}) => {
            await page.goto(`components/hero/tests/hero.html?align-x=${alignX}&align-y=${alignY}`);
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
    })
})
