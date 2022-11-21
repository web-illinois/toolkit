const util = require('../../tests.util');
const a11y = require('../../_lib/a11y');
const nav = require("../../components/navigation/nav.util");

beforeEach(async () => {
  await page.goto(util.testUrl(__filename));
});

test("the theme is accessible", async () => {
  await expect('.color-theme').toHaveColorContrast();
});

test("the theme link hover color is accessible", async () => {
  await page.hover('.color-theme__examples p a');
  await expect('.color-theme').toHaveColorContrast();
});

test("the theme link focus color is accessible", async () => {
  await util.moveFocus(page, '.color-theme__examples p a');
  await expect('.color-theme').toHaveColorContrast();
});
