const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: "header-default",
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    },
    {
      url, label: "header-default-link-hover",
      viewports: [viewports.desktop],
      onReady: async (page) => {
        await page.hover('#link-1');
      }
    },
    {
      url, label: "header-default-link-focus",
      viewports: [viewports.desktop],
      onReady: async (page) => {
        await util.moveFocus(page, '#link-1');
      }
    },
  ]
}