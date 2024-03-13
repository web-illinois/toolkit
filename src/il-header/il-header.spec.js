import {test, expect} from '@playwright/test';
import AxeBuilder from "@axe-core/playwright";

// Compact mode

test.describe('when the screen is under 990 pixels wide', () => {
  test.use({ viewport: { width: 989, height: 600 }});

  test('header is in compact mode', async ({page}) => {
    test.info().annotations.push({
      source: "#header-switches-to-compact-mode-at-900px"
    })
    await page.goto('il-header/samples/header.html');
    const isCompact = await page.evaluate(() => {
      return document.querySelector('il-header').hasAttribute('compact');
    })
    await expect(isCompact).toBeTruthy();
  })

  // When there are no menu contents

  test('when there are no menu contents, the menu toggle button is not visible', async({page}) => {
    await page.goto('il-header/samples/site-name-only.html');
    const toggle = await page.getByRole('button', { name: 'Menu' });
    await expect(toggle).not.toBeVisible();
  })

  // When there are menu contents

  test('eyebrow links are hidden', async({page}) => {
    test.info().annotations.push({
      source: "#links-search-and-nav-are-hidden-in-compact-mode"
    })
    await page.goto('il-header/samples/header.html');
    const nav = await page.locator('nav[slot="eyebrow"]');
    await expect(nav).not.toBeVisible();
  })

  test('search is hidden', async({page}) => {
    test.info().annotations.push({
      source: "#links-search-and-nav-are-hidden-in-compact-mode"
    })
    await page.goto('il-header/samples/header.html');
    const nav = await page.locator('form[slot="search"]');
    await expect(nav).not.toBeVisible();
  })

  test('navigation is hidden', async({page}) => {
    test.info().annotations.push({
      source: "#links-search-and-nav-are-hidden-in-compact-mode"
    })
    await page.goto('il-header/samples/header.html');
    const nav = await page.locator('il-main-nav');
    await expect(nav).not.toBeVisible();
  })

  test('the menu toggle button is visible', async({page}) => {
    test.info().annotations.push({
      source: "#the-compact-header-has-a-menu-toggle"
    })
    await page.goto('il-header/samples/header.html');
    const toggle = await page.getByRole('button', { name: 'Menu' });
    await expect(toggle).toBeVisible();
  })

  test('clicking the menu toggle reveals the eyebrow links', async({page}) => {
    test.info().annotations.push({
      source: "#the-toggle-controls-the-visibility-of-the-hidden-items"
    })
    await page.goto('il-header/samples/header.html');
    await page.getByRole('button', { name: 'Menu' }).click();
    const nav = await page.locator('nav[slot="eyebrow"]');
    await expect(nav).toBeVisible();
  })

  test('the sample page is accessible', async ({page}) => {
    await page.goto('il-header/samples/header.html');
    const results = await new AxeBuilder({page}).analyze();
    await expect(results.violations).toEqual([]);
  })

  // When the screen gets wider

  test('header switches from compact mode when width is 990 pixels or wider', async ({page}) => {
    test.info().annotations.push({
      source: "#header-switches-to-compact-mode-at-900px"
    })
    await page.goto('il-header/samples/header.html');
    await page.setViewportSize({ width: 990, height: 600 });
    await page.waitForTimeout(500);
    const isCompact = await page.evaluate(() => {
      return document.querySelector('il-header').hasAttribute('compact');
    })
    await expect(isCompact).toBeFalsy();
  })
})

// Default mode

test.describe('when the screen is 990 pixels or wider', () => {
  test.use({ viewport: { width: 990, height: 600 }});

  test('header is not in compact mode', async ({page}) => {
    test.info().annotations.push({
      source: "#header-switches-to-compact-mode-at-900px"
    })
    await page.goto('il-header/samples/header.html');
    const isCompact = await page.evaluate(() => {
      return document.querySelector('il-header').hasAttribute('compact');
    })
    await expect(isCompact).toBeFalsy();
  })

  test('eyebrow links are visible', async({page}) => {
    test.info().annotations.push({
      source: "#links-search-and-nav-are-hidden-in-compact-mode"
    })
    await page.goto('il-header/samples/header.html');
    const nav = await page.locator('nav[slot="eyebrow"]');
    await expect(nav).toBeVisible();
  })

  test('search is visible', async({page}) => {
    test.info().annotations.push({
      source: "#links-search-and-nav-are-hidden-in-compact-mode"
    })
    await page.goto('il-header/samples/header.html');
    const nav = await page.locator('form[slot="search"]');
    await expect(nav).toBeVisible();
  })

  test('navigation is visible', async({page}) => {
    test.info().annotations.push({
      source: "#links-search-and-nav-are-hidden-in-compact-mode"
    })
    await page.goto('il-header/samples/header.html');
    const nav = await page.locator('il-main-nav');
    await expect(nav).toBeVisible();
  })

  test('the menu toggle button is not visible', async({page}) => {
    test.info().annotations.push({
      source: "#the-compact-header-has-a-menu-toggle"
    })
    await page.goto('il-header/samples/header.html');
    const toggle = await page.getByRole('button', { name: 'Menu' });
    await expect(toggle).not.toBeVisible();
  })

  test('the sample page is accessible', async ({page}) => {
    await page.goto('il-header/samples/header.html');
    const results = await new AxeBuilder({page}).analyze();
    await expect(results.violations).toEqual([]);
  })

  // When the screen gets narrow

  test('header switches to compact mode when width shrinks below 990 pixels', async ({page}) => {
    test.info().annotations.push({
      source: "#header-switches-to-compact-mode-at-900px"
    })
    await page.goto('il-header/samples/header.html');
    await page.setViewportSize({ width: 989, height: 600 });
    await page.waitForTimeout(500);
    const isCompact = await page.evaluate(() => {
      return document.querySelector('il-header').hasAttribute('compact');
    })
    await expect(isCompact).toBeTruthy();
  })
})
