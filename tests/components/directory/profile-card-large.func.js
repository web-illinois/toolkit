const util = require('../../tests.util');
const a11y = require('../../_lib/a11y');
const nav = require("../../components/navigation/nav.util");

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

test("the profile card is accessible", async () => {
  await expect('il-profile-card').toHaveColorContrast();
});

test("the profile card link hover color is accessible", async () => {
  await page.hover('.il-contact-email a');
  await expect('il-profile-card').toHaveColorContrast();
});

test("the profile card link focus color is accessible", async () => {
  await util.moveFocus(page, '.il-contact-email a');
  await expect('il-profile-card').toHaveColorContrast();
});
