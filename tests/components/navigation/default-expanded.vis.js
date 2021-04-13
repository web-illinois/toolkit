const util = require('../../tests.util');

const url = util.urlForTest(__filename);

module.exports = (viewports) => {
  return [
    {
      url,
      'label': 'navigation-subnav-open',
      'viewports': [viewports.desktop, viewports.iphone, viewports.hdtv]
    },
    {
      url,
      'label': 'navigation-subnav-link-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2B');
      }
    },
    {
      url,
      'label': 'navigation-subnav-link-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2B');
      }
    },
  ];
}