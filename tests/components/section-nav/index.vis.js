const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'section-nav',
      'caption': 'Default state',
      'viewports': [viewports.desktop, viewports.iphone, viewports.hdtv]
    },
    {
      url, 'label': 'section-nav-hover',
      'caption': 'Hover over link',
      'viewports': [viewports.desktop, viewports.hdtv],
      'onReady': async (page, scenario) => {
        await page.hover('#link');
      }
    },
    {
      url, 'label': 'section-nav-focus',
      'caption': 'Link has focus',
      'viewports': [viewports.desktop, viewports.hdtv],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link');
      }
    }
  ];
}