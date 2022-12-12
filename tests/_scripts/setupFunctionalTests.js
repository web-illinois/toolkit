const a11y = require('../_lib/a11y');
const util = require("../tests.util");

beforeEach(async () => {
  await util.gotoTestPage();
});

async function toHaveFocus(sel) {
  const focused = await page.evaluate((sel) => {
    return document.querySelector(sel) === document.activeElement;
  }, [sel]);
  return {
    message: () => `expected the element to have focus`,
    pass: focused
  }
}

expect.extend({toHaveFocus});
