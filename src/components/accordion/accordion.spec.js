import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ viewport: { width: 1200, height: 800 }});

test.beforeEach(async({page}) => {
    await page.goto('components/accordion/accordion.html');
})

// TODO: Desktop and mobile screenshots
test('it has a screenshot', async ({ page }) => {
    await expect(page.getByTestId('component')).toHaveScreenshot();
})

// TODO: White theme
