import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.use({ viewport: { width: 1280, height: 1024 } });

test('button-using-anchor', async ({page}) => {
    await page.goto(`components/il-content/tests/button-anchor.html`);
    await expect(page.getByTestId('component')).toHaveScreenshot();
  });
  
  test('button-using-button', async ({page}) => {
    await page.goto(`components/il-content/tests/button.html`);
    await expect(page.getByTestId('component')).toHaveScreenshot();
  });
  
  test('buttons', async ({page}) => {
    await page.goto(`components/il-content/tests/button.html`);
    await expect(page.getByTestId('component')).toHaveScreenshot();
  });
    
  test('card', async ({page}) => {
    await page.goto(`components/il-content/tests/card.html`);
    await expect(page.getByTestId('component')).toHaveScreenshot();
  });
    
  test('cards', async ({page}) => {
    await page.goto(`components/il-content/tests/cards.html`);
    await expect(page.getByTestId('component')).toHaveScreenshot();
  });
  
  test('introduction', async ({page}) => {
    await page.goto(`components/il-content/tests/introduction.html`);
    await expect(page.getByTestId('component')).toHaveScreenshot();
  });
  
  test('lede', async ({page}) => {
    await page.goto(`components/il-content/tests/lede.html`);
    await expect(page.getByTestId('component')).toHaveScreenshot();
  });
  