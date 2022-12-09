const util = require('../../../tests.util');
const nav = require('../nav.util');

beforeEach(async () => {
  await util.gotoTestPage();
});

test("the component has correct color contrast", async () => {
  await expect('il-nav').toHaveColorContrast();
});

describe("when a top-level link with a submenu gets focus", () => {
  beforeEach(async () => {
    await util.moveFocus(page, '#link-2');
  });

  test("its submenu should expand", async () => {
    const isVisible = await nav.sectionisExpanded(page, '#section-2');
    await expect(isVisible).toBeTruthy();
  });
});

describe("when a top-level link with a submenu is clicked", () => {
  beforeEach(async () => {
    await page.click('#link-2');
  });

  test.skip("its submenu should not expand", async () => {
    const isVisible = await nav.sectionisExpanded(page, '#section-2');
    await expect(isVisible).toBe(false);
  });
});
