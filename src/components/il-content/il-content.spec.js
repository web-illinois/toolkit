import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const themes = ['gray', 'blue', 'white', 'blue-gradient', 'orange'];
const sizes = ['small', 'large'];

const desktop = { width: 1280, height: 1024 };
const mobile = { width: 375, height: 812 };

test.use({ viewport: { width: 1280, height: 1024 } });

test.describe('desktop', () => {
    test.use({ viewport: desktop });
    runTest(test, 'card', 'base-test', '', true);
    runTest(test, 'card', 'icon', 'icon', true);
    themes.forEach(theme => {
        runTest(test, 'card', `theme-${theme}`, `theme=${theme}`, true);
    });
    sizes.forEach(size => {
        runTest(test, 'card', `size-${size}`, `size=${size}`, true);
    });
    runTest(test, 'cards', 'base-test', '', false);
    runTest(test, 'introduction', 'base-test', '', true);
    runTest(test, 'introduction', 'fixed', 'fixed', false);
    themes.forEach(theme => {
        runTest(test, 'introduction', `theme-${theme}`, `theme=${theme}`, true);
    });
    sizes.forEach(size => {
        runTest(test, 'introduction', `size-${size}`, `size=${size}`, true);
    });
    runTest(test, 'lede-with-content-class', 'base-test', '', true);
    runTest(test, 'lede-with-content-class', 'fixed', 'fixed', false);
    themes.forEach(theme => {
        runTest(test, 'lede-with-content-class', `theme-${theme}`, `theme=${theme}`, true);
    });
    sizes.forEach(size => {
        runTest(test, 'lede-with-content-class', `size-${size}`, `size=${size}`, true);
    });
    runTest(test, 'lede-with-paragraph-class', 'base-test', '', true);
    runTest(test, 'lede-with-paragraph-class', 'fixed', 'fixed', false);
    themes.forEach(theme => {
        runTest(test, 'lede-with-paragraph-class', `theme-${theme}`, `theme=${theme}`, true);
    });
    sizes.forEach(size => {
        runTest(test, 'lede-with-paragraph-class', `size-${size}`, `size=${size}`, true);
    });
    runTest(test, 'content', 'base-test', '', true);
    runTest(test, 'headings', 'base-test', '', true);
});

test.describe('mobile', () => {
    test.use({ viewport: mobile });
    runTest(test, 'cards', 'base-test', '', true);
    runTest(test, 'introduction', 'base-test', '', true);
    runTest(test, 'lede-with-content-class', 'base-test', '', true);
    runTest(test, 'lede-with-paragraph-class', 'base-test', '', true);
    runTest(test, 'content', 'base-test', '', true);
    runTest(test, 'headings', 'base-test', '', true);
})

// private functions

function runTest(test, file, name, querystring, accessibility) {
    test.describe(`${file}-${name}`, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-content/tests/${file}.html?${querystring}`);
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