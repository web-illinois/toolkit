const util = require('../../tests.util');

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

test("the component does not have correct color contrast", async () => {
  await expect('il-statistic').not.toHaveColorContrast();
});
