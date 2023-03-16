const util = require('../../tests.util');
const a11y = require('../../_lib/a11y');

beforeEach(async () => {
  console.debug(util.testUrl(__filename));
  await page.goto(util.testUrl(__filename));
});

test("the component has correct color contrast", async () => {
  await expect('.breadcrumbs').toHaveColorContrast();
});
