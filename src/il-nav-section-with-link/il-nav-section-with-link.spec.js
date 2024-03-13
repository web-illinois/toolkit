import {test, expect} from '@playwright/test';

// Pointer interaction

test('clicking the toggle of a collapsed section expands the section', async ({page}) => {
  await page.goto('il-nav-section-with-link/samples/nav.html');
  await expect(page.getByTestId('first-top-level-section-contents')).not.toBeVisible();
  await page.getByTestId('first-top-level-section').getByRole('button').click();
  await expect(page.getByTestId('first-top-level-section-contents')).toBeVisible();
})
test('clicking the toggle of an expanded section collapses the section', async ({page}) => {
  await page.goto('il-nav-section-with-link/samples/nav.html');
  await page.getByTestId('first-top-level-section').getByRole('button').click();
  await expect(page.getByTestId('first-top-level-section-contents')).toBeVisible();
  await page.evaluate(() => {
    document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').click();
  })
  await expect(page.getByTestId('first-top-level-section-contents')).not.toBeVisible();
})

// Keyboard interaction

test.describe('pressing escape when a section is expanded', () => {
  test('collapses that section', async ({page}) => {
    await page.goto('il-nav-section-with-link/samples/nav.html');
    await page.getByTestId('first-top-level-section').getByRole('button').click();
    await expect(page.getByTestId('first-top-level-section-contents')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('first-top-level-section-contents')).not.toBeVisible();
  })
  test("moves focus to that section's toggle", async ({page}) => {
  })
})
test.describe('when a section toggle has focus', () => {
  test.describe('and its section is collapsed', () => {
    test('pressing enter expands the section', async ({page}) => {
      await page.goto('il-nav-section-with-link/samples/nav.html');
      await page.evaluate(() => {
        document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').focus();
      })
      await page.keyboard.press('Enter');
      await expect(page.getByTestId('first-top-level-section-contents')).toBeVisible();
    })
    test('pressing space expands the section', async ({page}) => {
      await page.goto('il-nav-section-with-link/samples/nav.html');
      await page.evaluate(() => {
        document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').focus();
      })
      await page.keyboard.press('Space');
      await expect(page.getByTestId('first-top-level-section-contents')).toBeVisible();
    })
  })
  test.describe('and its section is expanded', () => {
    test('pressing enter collapses the section', async ({page}) => {
      await page.goto('il-nav-section-with-link/samples/nav.html');
      await page.evaluate(() => {
        document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').click();
      })
      await expect(page.getByTestId('first-top-level-section-contents')).toBeVisible();
      await page.evaluate(() => {
        document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').focus();
      })
      await page.keyboard.press('Enter');
      await expect(page.getByTestId('first-top-level-section-contents')).not.toBeVisible();
    })
    test('pressing space collapses the section', async ({page}) => {
      await page.goto('il-nav-section-with-link/samples/nav.html');
      await page.evaluate(() => {
        document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').click();
      })
      await expect(page.getByTestId('first-top-level-section-contents')).toBeVisible();
      await page.evaluate(() => {
        document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').focus();
      })
      await page.keyboard.press('Space');
      await expect(page.getByTestId('first-top-level-section-contents')).not.toBeVisible();
    })
  })
})
test.describe('when the toggle of a top-level section has focus', () => {
  test('pressing shift+tab moves focus to the section link', async ({page}) => {
    await page.goto('il-nav-section-with-link/samples/nav.html');
    await page.evaluate(() => {
      document.querySelector('*[data-testid="first-top-level-section"]').shadowRoot.querySelector('button.toggle').focus();
    })
    await page.keyboard.press('Shift+Tab');
    await expect(page.getByTestId('first-top-level-section-link')).toBeFocused();
  })
})
