const util = require('../../tests.util');

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

test("the component has correct color contrast", async () => {
  await expect('il-section-with-sidebar').toHaveColorContrast();
});
