const util = require('../../tests.util');
const a11y = require('../../_lib/a11y');

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

test("the component has correct color contrast", async () => {
  await expect('il-back-to-top').toHaveColorContrast();
});
