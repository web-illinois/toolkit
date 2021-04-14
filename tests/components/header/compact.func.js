const util = require('../../tests.util');

function getMenuToggle(page) {
  return page.evaluateHandle(() => {
    return document.querySelector('il-header').shadowRoot.querySelector('button');
  });
}

function menuIsVisible(page) {
  return page.evaluate(() => {
    return document.querySelector('il-header')
    .shadowRoot.querySelector('button')
    .getAttribute('aria-expanded') === 'true';
  });
}

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

describe("when the menu is expanded", () => {
  beforeEach(async () => {
    const toggle = await getMenuToggle(page);
    await toggle.click();
  });

  describe("clicking outside the menu", () => {
    beforeEach(async () => {
      await page.click('#outside');
    });

    test('closes the menu', async () => {
      const isVisible = await menuIsVisible(page);
      await expect(isVisible).toBeFalsy();
    });
  });
});
