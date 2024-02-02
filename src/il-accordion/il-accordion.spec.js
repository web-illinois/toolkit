import { test, expect } from '@playwright/test';

const apgAccordionPattern = "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/";

test('clicking on the header of a collapsed panel expands the panel', async ({ page }) => {
  await page.goto('il-accordion/samples/accordion-with-three-panels.html');
  await page.getByText('Alumni', { exact: true }).click();
  await expect(page.getByText('Learn about some notable LAS alumni')).toBeVisible();
})
test('clicking on the header of an expanded panel collapses the panel', async ({ page }) => {
  await page.goto('il-accordion/samples/accordion-with-expanded-panel.html');
  await page.getByText('Alumni', { exact: true }).click();
  await expect(page.getByText('Learn about some notable LAS alumni')).not.toBeVisible();
})
test.describe('when a header has focus', () => {
  test.describe('and its panel is collapsed', () => {
    test('pressing enter expands the panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-three-panels.html');
      await page.getByText('Alumni', { exact: true }).focus();
      await page.keyboard.press('Enter');
      await expect(page.getByText('Learn about some notable LAS alumni')).toBeVisible();
    })
    test('pressing space expands the panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-three-panels.html');
      await page.getByText('Alumni', { exact: true }).focus();
      await page.keyboard.press('Space');
      await expect(page.getByText('Learn about some notable LAS alumni')).toBeVisible();
    })
  })
  test.describe('and its panel is expanded', () => {
    test('pressing enter collapses the panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-expanded-panel.html');
      await page.getByText('Alumni', { exact: true }).focus();
      await page.keyboard.press('Enter');
      await expect(page.getByText('Learn about some notable LAS alumni')).not.toBeVisible();
    })
    test('pressing space collapses the panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-expanded-panel.html');
      await page.getByText('Alumni', { exact: true }).focus();
      await page.keyboard.press('Space');
      await expect(page.getByText('Learn about some notable LAS alumni')).not.toBeVisible();
    })
  })
});
test.describe('when a header has focus and it is not the first panel header', () => {
  test.describe('and the previous panel is collapsed', () => {
    test('pressing shift+tab moves focus to the header of the previous panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-three-panels.html');
      await page.getByText('Faculty', { exact: true }).focus();
      await page.keyboard.press('Shift+Tab');
      await expect(page.getByText('Alumni', { exact: true })).toBeFocused();
    })
  })
  test.describe('and the previous panel is expanded', () => {
    test('pressing shift+tab moves focus to the last link in the previous panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-expanded-panel.html');
      await page.getByText('Faculty', { exact: true }).focus();
      await page.keyboard.press('Shift+Tab');
      await expect(page.getByText('Learn about some notable LAS alumni')).toBeFocused();
    })
  })
});
test.describe('when a header has focus and it is not the last panel header', () => {
  test.describe('and its panel is collapsed', () => {
    test('pressing tab moves focus to the header of the next panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-three-panels.html');
      await page.getByText('Faculty', { exact: true }).focus();
      await page.keyboard.press('Tab');
      await expect(page.getByText('Students', { exact: true })).toBeFocused();
    })
  })
  test.describe('and its panel is expanded', () => {
    test('pressing tab moves focus to the first link in the panel', async ({ page }) => {
      await page.goto('il-accordion/samples/accordion-with-expanded-panel.html');
      await page.getByText('Alumni', { exact: true }).focus();
      await page.keyboard.press('Tab');
      await expect(page.getByText('Learn about some notable LAS alumni')).toBeFocused();
    })
  })
});
