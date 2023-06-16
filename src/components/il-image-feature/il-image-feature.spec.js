import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

const desktop = { width: 1280, height: 1024 };
const mobile = { width: 375, height: 812 };

const themes = ['blue', 'gray', 'white', 'orange', 'blue-gradient'];
const sizes = ['portrait', 'small', 'large'];

test.describe('desktop', () => {
    test.use({ viewport: desktop });
    runTest(test, 'base-test', '', true);
    themes.forEach(theme => {
        runTest(test, `theme-${theme}`, `theme=${theme}`, true);
    });
    themes.forEach(theme => {
        runTest(test, `background-theme-${theme}`, `background&theme=${theme}`, true);
    });
    sizes.forEach(size => {
        runTest(test, `size-${size}`, `size=${size}`, false);
    });
    runTest(test, `background-float-right`, `background&float=right`, false);
    runTest(test, `float-right`, `float=right`, false);
    themes.forEach(theme => {
        runTest(test, `mobile-theme-${theme}`, `mobile&theme=${theme}`, false);
    });
});

test.describe('mobile', () => {
    test.use({ viewport: mobile });
    runTest(test, 'base-test', '', true);
    themes.forEach(theme => {
        runTest(test, `theme-${theme}`, `theme=${theme}`, true);
    });
    themes.forEach(theme => {
        runTest(test, `background-theme-${theme}`, `background&theme=${theme}`, true);
    });
    sizes.forEach(size => {
        runTest(test, `size-${size}`, `size=${size}`, false);
    });
    runTest(test, `background-float-right`, `background&float=right`, false);
    runTest(test, `float-right`, `float=right`, false);
})

test.describe('desktop-clickable', () => {
    test.use({ viewport: desktop });
    runTestClickable(test, 'base-test', 'mobile', true);
    themes.forEach(theme => {
        runTest(test, `mobile-theme-${theme}`, `mobile&theme=${theme}`, false);
    });
    runTestClickableHighlighted(test, 'highlighted', 'mobile', true);
    themes.forEach(theme => {
        runTestClickableHighlighted(test, `highlighted-mobile-theme-${theme}`, `mobile&theme=${theme}`, false);
    });
});

test.describe('mobile-statistics', () => {
    test.use({ viewport: mobile });
    test.beforeEach(async({page}) => {
        await page.goto(`components/il-image-feature/tests/image-feature-statistic.html`);
    });
    test(`screenshot`, async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    });
});

test.describe('desktop-statistics', () => {
    test.use({ viewport: desktop });
    test.beforeEach(async({page}) => {
        await page.goto(`components/il-image-feature/tests/image-feature-statistic.html`);
    });
    test(`screenshot`, async ({ page }) => {
        await expect(page.getByTestId('component')).toHaveScreenshot();
    });
});

// private functions

function runTest(test, name, querystring, accessibility) {
    test.describe(name, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-image-feature/tests/image-feature.html?${querystring}`);
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

function runTestClickable(test, name, querystring, accessibility) {
    test.describe(name, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-image-feature/tests/image-feature-clickable.html?${querystring}`);
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

function runTestClickableHighlighted(test, name, querystring, accessibility) {
    test.describe(name, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-image-feature/tests/image-feature-clickable.html?${querystring}`);
            await page.locator('#sample-link').focus();
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