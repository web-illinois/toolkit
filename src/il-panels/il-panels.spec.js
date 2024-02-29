import {test, expect} from '@playwright/test';

test('panels can be accordions', async ({page}) => {
  await page.goto('il-panels/samples/accordion.html');
  const view = await page.evaluate(() => document.querySelector('il-panels').getAttribute('data-il-panels-view'));
  await expect(view).toEqual('accordion');
})

test('accordion panels are hidden by default', async ({page}) => {
  await page.goto('il-panels/samples/accordion.html');
  const panel3 = await page.locator('#porphyry');
  const panel4 = await page.locator('#peridotite');
  await expect(page.locator('#granite')).not.toBeVisible();
  await expect(page.locator('#gabbro')).not.toBeVisible();
  await expect(panel3).not.toBeVisible();
  await expect(panel4).not.toBeVisible();
})

test('clicking on an accordion heading reveals its panel', async ({page}) => {
  await page.goto('il-panels/samples/accordion.html');
  await page.locator('#granite-label').click();
  await expect(page.locator('#granite')).toBeVisible();
})

test('clicking on the heading for a visible accordion panel hides the panel', async ({page}) => {
  await page.goto('il-panels/samples/accordion.html');
  await page.locator('#granite-label').click();
  await page.locator('#granite-label').click();
  await expect(page.locator('#granite')).not.toBeVisible();
})
