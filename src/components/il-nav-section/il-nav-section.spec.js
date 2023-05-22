import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

// Without link

test('nav section without link', async ({page}) => {
    await page.goto('components/il-nav-section/tests/without-link.html');
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('hover over button in nav section without link', async ({page}) => {
    await page.goto('components/il-nav-section/tests/without-link.html');
    await page.getByRole('button').hover();
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('focus on button in nav section without link', async ({page}) => {
    await page.goto('components/il-nav-section/tests/without-link.html');
    await page.getByRole('button').focus();
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('expand', async ({ page }) => {
    await page.goto('components/il-nav-section/tests/without-link.html');
    await page.getByRole('button').click();
    await expect(page.locator('il-nav-section')).toHaveAttribute('expanded', '');
    await expect(page.locator('#container')).toHaveClass('expanded');
    await expect(page.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('collapse', async ({ page }) => {
    await page.goto('components/il-nav-section/tests/without-link.html');
    await page.getByRole('button').click();
    await page.getByRole('button').click();
    await expect(page.locator('il-nav-section')).not.toHaveAttribute('expanded', '');
    await expect(page.locator('#container')).toHaveClass('collapsed');
    await expect(page.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

// With link

test('nav section with link', async ({page}) => {
    await page.goto('components/il-nav-section/tests/with-link.html');
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('hover over link in nav section', async ({page}) => {
    await page.goto('components/il-nav-section/tests/with-link.html');
    await page.getByTestId('link').hover();
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('focus on link in nav section', async ({page}) => {
    await page.goto('components/il-nav-section/tests/with-link.html');
    await page.getByTestId('link').focus();
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('hover over button in nav section with link', async ({page}) => {
    await page.goto('components/il-nav-section/tests/with-link.html');
    await page.getByRole('button').hover();
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});

test('focus on button in nav section with link', async ({page}) => {
    await page.goto('components/il-nav-section/tests/with-link.html');
    await page.getByRole('button').focus();
    await expect(page.getByTestId('nav-section')).toHaveScreenshot();
    const results = await new AxeBuilder({ page })
        .include('il-nav-section')
        .analyze();
    expect(results.violations).toEqual([]);
});
