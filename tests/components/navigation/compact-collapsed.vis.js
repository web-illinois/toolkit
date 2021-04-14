const util = require('../../tests.util');
const nav = require('./nav.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url,
      'label': 'navigation-top-level-hover',
      'viewports': [viewports.iphone],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2');
      }
    },
    {
      url,
      'label': 'navigation-top-level-focus',
      'viewports': [viewports.iphone],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2');
      }
    },
    {
      url,
      'label': 'navigation-toggle-hover',
      'viewports': [viewports.iphone],
      'onReady': async (page, scenario) => {
        const toggle = await nav.getSectionToggle(page, '#section-2');
        await toggle.hover();
      }
    },
    {
      url,
      'label': 'navigation-toggle-focus',
      'viewports': [viewports.iphone],
      'onReady': async (page, scenario) => {
        const toggle = await nav.getSectionToggle(page, '#section-2');
        await toggle.focus();
      }
    },
  ];
}