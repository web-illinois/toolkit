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


/*
test.skip('desktop', () => {
    test.use({ viewport: desktop });
    runTest(test, 'base-test', '', true);
    runTest(test, 'fixed', 'fixed', true);
    runTest(test, 'vertical', 'vertical', false);
    runTest(test, 'fixed-vertical', 'fixed&vertical', false);
    themes.forEach(theme => {
        runTest(test, `theme-${theme}`, `theme=${theme}`, true);
    });
    themes.forEach(theme => {
        runTest(test, `vertical-theme-${theme}`, `vertical&theme=${theme}`, false);
    });
});

test.skip('mobile', () => {
    test.use({ viewport: mobile });
    runTest(test, 'base-test', '', true);
    runTest(test, 'fixed', 'fixed', true);
    runTest(test, 'vertical', 'vertical', false);
    runTest(test, 'fixed-vertical', 'fixed&vertical', false);
    themes.forEach(theme => {
        runTest(test, `theme-${theme}`, `theme=${theme}`, true);
    });
    themes.forEach(theme => {
        runTest(test, `vertical-theme-${theme}`, `vertical&theme=${theme}`, false);
    });
})
*/
// private functions

function runTest(test, name, querystring, accessibility) {
    test.describe(name, () => {
        test.beforeEach(async({page}) => {
            await page.goto(`components/il-tabs/tests/tabs.html?${querystring}`);
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