const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'navigation-long-links',
      'caption': 'Default state',
      'viewports': [viewports.desktop]
    },
    {
      url, 'label': 'navigation-long-links-short-expanded',
      'caption': 'Short label section expanded',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#short-section-link');
      }
    },
    {
      url, 'label': 'navigation-long-links-long-expanded',
      'caption': 'Long label section expanded',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#long-section-link');
      }
    }
  ];
}