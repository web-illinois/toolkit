const tester = require('../../_lib/tester');

describe("when the second section is expanded", () => {
  beforeEach(async () => {
    await page.evaluate(() => {
      document.querySelector('#section-2').setAttribute('expanded', '');
      document.querySelector('#section-2').setAttribute('current', '');
    })
  })
  describe("when the second item has focus", () => {
    beforeEach(async () => {
      await tester.moveFocusTo('#link-2B');
    })
    test("pressing tab moves focus to the next link", async () => {
      await tester.pressTabKey();
      await expect('#link-2C').toHaveFocus();
    });
    test("pressing down moves focus to the next link", async () => {
      await tester.pressDownArrowKey();
      await expect('#link-2C').toHaveFocus();
    });
  })
})
