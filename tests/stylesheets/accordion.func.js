const util = require('../tests.util');

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

test("the element is accessible", async () => {
  await expect('.il-accordion-multiple').toHaveColorContrast();
});

test("the element is accessible", async () => {
  await expect('.il-accordion.il-details-solid').toHaveColorContrast();
});

test("the element is accessible", async () => {
  await expect('.il-accordion.il-details-bordered').toHaveColorContrast();
});

test("the element is accessible", async () => {
  await expect('.il-accordion-multiple.il-details-bordered').toHaveColorContrast();
});

