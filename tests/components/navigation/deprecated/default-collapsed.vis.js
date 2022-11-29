const util = require('../../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'navigation-deprecated',
      'viewports': [viewports.desktop, viewports.iphone, viewports.hdtv]
    },
    {
      url, 'label': 'navigation-deprecated-top-level-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'navigation-deprecated-top-level-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2');
        await page.waitFor(500);
      }
    }
  ];
}