import {test, expect} from '@playwright/test';
import AxeBuilder from "@axe-core/playwright";

test('the blank page is accessible', async ({page}) => {
  await page.goto('il-page/samples/minerals.html');
  const results = await new AxeBuilder({page}).analyze();
  await expect(results.violations).toEqual([]);
})
