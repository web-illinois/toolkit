const util = require('../../tests.util');
const viewports = require('../../../viewports.json');

describe("on large screens", () => {

  beforeEach(async () => {
    await page.setViewport(viewports.desktop);
    await page.goto(util.testUrl(__filename));
  });

  test("mode is 'full'", async () => {
    const mode = await page.evaluate(() => {
      return document.querySelector('il-page').getAttribute('mode');
    });
    await expect(mode).toEqual('full');
  });
})

describe("on small screens", () => {

  beforeEach(async () => {
    await page.setViewport(viewports.iphone);
    await page.goto(util.testUrl(__filename));
  });

  test("mode is 'compact'", async () => {
    const mode = await page.evaluate(() => {
      return document.querySelector('il-page').getAttribute('mode');
    });
    await expect(mode).toEqual('compact');
  });
})

