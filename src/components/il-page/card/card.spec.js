import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ viewport: { width: 800, height: 600 } });

test(`card`, async ({ page }) => {
    await page.goto(`components/il-page/card/tests/card.html`);
    await expect(page.getByTestId('card')).toHaveScreenshot();
})
test(`card accessibility`, async({page}) => {
    await page.goto(`components/il-page/card/tests/card.html`);
    const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
    expect(results.violations).toEqual([]);
})

test(`card with image`, async ({ page }) => {
    await page.goto(`components/il-page/card/tests/card-with-image.html`);
    await expect(page.getByTestId('card')).toHaveScreenshot();
})
test(`card with image accessibility`, async({page}) => {
    await page.goto(`components/il-page/card/tests/card-with-image.html`);
    const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
    expect(results.violations).toEqual([]);
})

test(`link card`, async ({ page }) => {
    await page.goto(`components/il-page/card/tests/link-card.html`);
    await expect(page.getByTestId('card')).toHaveScreenshot();
})
test(`link card accessibility`, async({page}) => {
    await page.goto(`components/il-page/card/tests/link-card.html`);
    const results = await new AxeBuilder({ page }).withRules('color-contrast').analyze();
    expect(results.violations).toEqual([]);
})
