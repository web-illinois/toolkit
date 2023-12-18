import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

const themes = ['blue', 'gray', 'white', 'orange'];

test.describe('desktop', () => {
    test.use({ viewport: { width: 1280, height: 1024 } });

    test('default arrangement', async ({page}) => {
        await page.goto(`components/il-tabs/tests/tabs.html`);
        await expect(page.getByTestId('component')).toHaveScreenshot();
    });

    test('adding a tab after the page has loaded', async ({page}) => {
        await page.goto(`components/il-tabs/tests/dynamic-content.html`);
        await expect(page.getByTestId('component')).toHaveScreenshot();
        // TODO: Test clicking on the inserted tab
    });
})

test.describe('mobile', () => {
    test.use({ viewport: { width: 375, height: 812 } });
    test('default arrangement', async ({page}) => {
        await page.goto(`components/il-tabs/tests/tabs.html`);
        await expect(page.getByTestId('component')).toHaveScreenshot();
    })
});