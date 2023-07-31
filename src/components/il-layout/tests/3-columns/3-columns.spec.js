import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function getItemPosition(page, testId) {
  const item = await page.getByTestId(testId);
  const x = await item.evaluate(item => item.offsetLeft);
  const y = await item.evaluate(item => item.offsetTop);
  return { x, y };
}

function getItemX(page, testId) {
  return page.getByTestId(testId).evaluate(item => item.offsetLeft);
}

function getItemY(page, testId) {
  return page.getByTestId(testId).evaluate(item => item.offsetTop);
}

test.describe('less than 360px wide', () => {
  test.use({ viewport: { width: 359, height: 600 } });
  test('each item is on its own row', async ({page}) => {
    await page.goto('components/il-layout/tests/3-columns/3-items.html');

    const item1 = await getItemPosition(page, 'item1');
    const item2 = await getItemPosition(page, 'item2');
    await expect(item2.x).toEqual(item1.x);
    await expect(item2.y).toBeGreaterThan(item1.y);

    const item3 = await getItemPosition(page, 'item3');
    await expect(item3.x).toEqual(item2.x);
    await expect(item3.y).toBeGreaterThan(item2.y);
  })
})

test.describe('at 360px wide', () => {
  test.use({ viewport: { width: 360, height: 600 } });
  test('items are arranged in 2 columns and wrap to 2 rows', async ({page}) => {
    await page.goto('components/il-layout/tests/3-columns/3-items.html');

    const item1 = await getItemPosition(page, 'item1');
    const item2 = await getItemPosition(page, 'item2');
    await expect(item2.x).toBeGreaterThan(item1.x);
    await expect(item2.y).toEqual(item1.y);

    const item3 = await getItemPosition(page, 'item3');
    await expect(item3.x).toEqual(item1.x);
    await expect(item3.y).toBeGreaterThan(item2.y);
  })
})

test.describe('at 660px wide', () => {
  test.use({ viewport: { width: 660, height: 600 } });
  test('items are in a row of 3', async ({page}) => {
    await page.goto('components/il-layout/tests/3-columns/3-items.html');

    const item1 = await getItemPosition(page, 'item1');
    const item2 = await getItemPosition(page, 'item2');
    await expect(item2.x).toBeGreaterThan(item1.x);
    await expect(item2.y).toEqual(item1.y);

    const item3 = await getItemPosition(page, 'item3');
    await expect(item3.x).toBeGreaterThan(item1.x);
    await expect(item3.y).toEqual(item2.y);
  })
})

test.describe('at 990px wide', () => {
  test.use({ viewport: { width: 990, height: 600 } });
  test('items are arranged in 2 columns and wrap to 2 rows', async ({page}) => {
    await page.goto('components/il-layout/tests/3-columns/3-items.html');

    const item1 = await getItemPosition(page, 'item1');
    const item2 = await getItemPosition(page, 'item2');
    await expect(item2.x).toBeGreaterThan(item1.x);
    await expect(item2.y).toEqual(item1.y);

    const item3 = await getItemPosition(page, 'item3');
    await expect(item3.x).toEqual(item1.x);
    await expect(item3.y).toBeGreaterThan(item2.y);
  })
})

test.describe('at 1200px wide', () => {
  test.use({ viewport: { width: 1200, height: 600 } });
  test('items are in a row of 3', async ({page}) => {
    await page.goto('components/il-layout/tests/3-columns/3-items.html');

    const item1 = await getItemPosition(page, 'item1');
    const item2 = await getItemPosition(page, 'item2');
    await expect(item2.x).toBeGreaterThan(item1.x);
    await expect(item2.y).toEqual(item1.y);

    const item3 = await getItemPosition(page, 'item3');
    await expect(item3.x).toBeGreaterThan(item1.x);
    await expect(item3.y).toEqual(item2.y);
  })
})

test.describe('at 1440px wide', () => {
  test.use({ viewport: { width: 1440, height: 600 } });
  test('items are in a row of 3', async ({page}) => {
    await page.goto('components/il-layout/tests/3-columns/3-items.html');

    const item1 = await getItemPosition(page, 'item1');
    const item2 = await getItemPosition(page, 'item2');
    await expect(item2.x).toBeGreaterThan(item1.x);
    await expect(item2.y).toEqual(item1.y);

    const item3 = await getItemPosition(page, 'item3');
    await expect(item3.x).toBeGreaterThan(item1.x);
    await expect(item3.y).toEqual(item2.y);
  })
})

