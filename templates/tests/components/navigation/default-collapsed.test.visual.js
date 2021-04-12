const util = require('../../tests.util');

const url = util.url('/tests/components/il-nav/default-collapsed.html');

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'navigation',
      'viewports': [viewports.desktop, viewports.iphone, viewports.hdtv]
    },
    {
      url, 'label': 'navigation-top-level-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2');
      }
    },
    {
      url, 'label': 'navigation-top-level-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2');
      }
    }
  ];
}