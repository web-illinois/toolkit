const util = require('../../tests.util');
const viewports = require('../../../viewports.json');

async function getMenu(page) {
  return page.evaluateHandle(() => {
    return document.querySelector('il-section-nav').shadowRoot.querySelector('.menu');
  })
}

async function getToggle(page) {
  return page.evaluateHandle(() => {
    return document.querySelector('il-section-nav').shadowRoot.querySelector('button');
  })
}

describe("on large screens", () => {

  beforeEach(async () => {
    await page.setViewport(viewports.desktop);
    await page.goto(util.testUrl(__filename));
  });

  test("the component has correct color contrast", async () => {
    await expect('il-section-nav').toHaveColorContrast();
  });

  test("does not have the 'compact' attribute", async () => {
    const hasAttr = await page.evaluate(() => {
      return document.querySelector('il-section-nav').hasAttribute('compact');
    });
    await expect(hasAttr).toEqual(false);
  });

  test("the toggle is hidden", async () => {
    const toggle = await getToggle(page);
    const toggleBox = await toggle.boundingBox();
    await expect(toggleBox).toBeNull();
  });

})

describe("on small screens", () => {

  beforeEach(async () => {
    await page.setViewport(viewports.iphone);
    await page.goto(util.testUrl(__filename));
  });

  test("the component has correct color contrast", async () => {
    await expect('il-section-nav').toHaveColorContrast();
  });

  test("has the 'compact' attribute", async () => {
    const hasAttr = await page.evaluate(() => {
      return document.querySelector('il-section-nav').hasAttribute('compact');
    });
    await expect(hasAttr).toEqual(true);
  });

  test("the toggle is visible", async () => {
    const toggle = await getToggle(page);
    const toggleBox = await toggle.boundingBox();
    await expect(toggleBox).not.toBeNull();
  });

  test("the menu is hidden", async () => {
    const menu = await getMenu(page);
    const menuBox = await menu.boundingBox();
    await expect(menuBox).toBeNull();
  });

  test("clicking the toggle reveals the menu", async () => {
    const toggle = await getToggle(page);
    await toggle.click();
    const menu = await getMenu(page);
    const menuBox = await menu.boundingBox();
    await expect(menuBox).not.toBeNull();
  });

  describe("when the menu is expanded", () => {

    beforeEach(async () => {
      const toggle = await getToggle(page);
      await toggle.click();
    });

    test("clicking the toggle hides the menu", async () => {
      const toggle = await getToggle(page);
      await toggle.click();
      const menu = await getMenu(page);
      const menuBox = await menu.boundingBox();
      await expect(menuBox).toBeNull();
    });
    
  });

})

