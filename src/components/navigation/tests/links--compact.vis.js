const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'navigation-links-compact',
      'caption': 'Default state',
      'viewports': [viewports.iphone]
    },
    {
      url, 'label': 'navigation-links-compact-hover',
      'caption': 'Hover over link',
      'viewports': [viewports.iphone],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'navigation-links-compact-focus',
      'caption': 'Link has focus',
      'viewports': [viewports.iphone],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2');
        await page.waitFor(500);
      }
    }
  ];
}