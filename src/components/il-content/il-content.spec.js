import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const themes = ['gray', 'blue', 'white', 'blue-gradient', 'orange'];
const sizes = ['small', 'large'];

const desktop = { width: 1280, height: 1024 };
const mobile = { width: 375, height: 812 };

test.use({ viewport: { width: 1280, height: 1024 } });

test.describe('desktop', () => {
    test.use({ viewport: desktop });
    runTest(test, 'card', 'base-test', '');
    runTest(test, 'card', 'icon', 'icon');
    runTest(test, 'cards', 'base-test', '');
    runTest(test, 'introduction', 'base-test', '');
    runTest(test, 'lede-with-content-class', 'base-test', '');
    runTest(test, 'lede-with-paragraph-class', 'base-test', '');
    runTest(test, 'content', 'base-test', '');
    runTest(test, 'headings', 'base-test', '');
    runTest(test, 'button', 'base-test', '');
    runTest(test, 'button-anchor', 'base-test', '');
    runTest(test, 'buttons', 'base-test', '');
});

test.describe('mobile', () => {
    test.use({ viewport: mobile });
    runTest(test, 'cards', 'base-test', '');
    runTest(test, 'introduction', 'base-test', '');
    runTest(test, 'lede-with-content-class', 'base-test', '');
    runTest(test, 'lede-with-paragraph-class', 'base-test', '');
    runTest(test, 'content', 'base-test', '');
    runTest(test, 'headings', 'base-test', '');
})

// private functions

function runTest(test, file, name, querystring) {
    test.describe(`${file}-${name}`, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-content/tests/${file}.html?${querystring}`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
    })
}