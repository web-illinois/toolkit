class ToolkitTester {
  static moveFocusTo(sel) {
    return page.evaluate((sel) => document.querySelector(sel).focus(), [sel]);
  }

  static pressDownArrowKey() {
    return page.keyboard.press('ArrowDown');
  }

  static pressTabKey() {
    return page.keyboard.press('Tab');
  }
}

async function toHaveFocus(sel) {
  const focused = await page.evaluate((sel) => {
    return document.querySelector(sel) === document.activeElement;
  }, [sel]);
  return {
    message: () => `expected the element to have focus`,
    pass: focused
  }
}

expect.extend({toHaveFocus});

module.exports = ToolkitTester;