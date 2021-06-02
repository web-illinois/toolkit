const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'navigation-links',
      'caption': 'Default state',
      'viewports': [viewports.desktop]
    },
    {
      url, 'label': 'navigation-links-hover',
      'caption': 'Hover over link',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2');
      }
    },
    {
      url, 'label': 'navigation-links-focus',
      'caption': 'Link has focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2');
      }
    }
  ];
}