const util = require('../tests.util');

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

test("the elements are accessible", async () => {
  await expect('body').toHaveColorContrast();
});
