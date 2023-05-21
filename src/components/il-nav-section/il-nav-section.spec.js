import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test('expand', async ({ page }) => {
    await page.goto('components/il-nav-section/tests/without-link.html');
    await page.getByRole('button').click();
    await expect(page.locator('il-nav-section')).toHaveAttribute('expanded', '');
    await expect(page.locator('#section')).toHaveClass('expanded');
    await expect(page.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('collapse', async ({ page }) => {
    await page.goto('components/il-nav-section/tests/without-link.html');
    await page.getByRole('button').click();
    await page.getByRole('button').click();
    await expect(page.locator('il-nav-section')).not.toHaveAttribute('expanded', '');
    await expect(page.locator('#section')).toHaveClass('collapsed');
    await expect(page.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

