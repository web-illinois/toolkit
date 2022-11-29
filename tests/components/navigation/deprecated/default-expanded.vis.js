const util = require('../../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url,
      'label': 'navigation-deprecated-subnav-open',
      'viewports': [viewports.desktop, viewports.iphone, viewports.hdtv]
    },
    {
      url,
      'label': 'navigation-deprecated-subnav-link-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2B');
      }
    },
    {
      url,
      'label': 'navigation-deprecated-subnav-link-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2B');
      }
    },
  ];
}