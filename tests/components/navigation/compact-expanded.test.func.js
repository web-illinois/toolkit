const util = require('../../tests.util');

beforeEach(async () => {
  await page.goto(util.url('/tests/components/il-nav/compact-expanded.html'));
});

describe("when the last submenu link has focus", () => {
  beforeEach(async () => {
    await util.moveFocus(page, '#link-2C');
  });

  describe("pressing the down arrow", () => {
    beforeEach(async () => {
      await page.keyboard.press('ArrowDown');
    });

    test("moves focus to the next top-level link", async () => {
      const hasFocus = await util.elementHasFocus(page, '#link-3');
      await expect(hasFocus).toBeTruthy();
    });
  });
});

describe("when the first submenu link has focus", () => {
  beforeEach(async () => {
    await util.moveFocus(page, '#link-2A');
  });

  describe("pressing the up arrow", () => {
    beforeEach(async () => {
      await page.keyboard.press('ArrowUp');
    });

    test("moves focus to the top-level link", async () => {
      const hasFocus = await util.elementHasFocus(page, '#link-2');
      await expect(hasFocus).toBeTruthy();
    });
  });
});
