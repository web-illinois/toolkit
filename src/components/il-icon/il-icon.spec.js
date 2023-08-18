import { test, expect } from '@playwright/test';

const desktop = { width: 1280, height: 1024 };
const mobile = { width: 375, height: 812 };

test.use({ viewport: { width: 1280, height: 1024 } });

test.describe('desktop', () => {
    test.use({ viewport: desktop });
    test.describe(`base-test`, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-icon/tests/icon.html`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
    })
});

test.describe('mobile', () => {
    test.use({ viewport: mobile });
    test.describe(`base-test`, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-icon/tests/icon.html`);
        });
        test(`screenshot`, async ({ page }) => {
            await expect(page.getByTestId('component')).toHaveScreenshot();
        });
    })
})