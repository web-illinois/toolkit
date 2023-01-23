
class ToolkitTester {

  constructor(page) {
    this.page = page;
  }

  moveFocusTo(sel) {
    return this.page.evaluate((sel) => document.querySelector(sel).focus(), [sel]);
  }

  pressDownArrowKey() {
    return this.page.keyboard.press('ArrowDown');
  }

  pressTabKey() {
    return this.page.keyboard.press('Tab');
  }
}

module.exports = ToolkitTester;