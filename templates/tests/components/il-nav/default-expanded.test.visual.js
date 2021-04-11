const util = require('../../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'navigation-top-level-hover',
      'url': util.url('/tests/components/il-nav/default-collapsed.html'),
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2');
      }
    },
    {
      'label': 'navigation-top-level-focus',
      'url': util.url('/tests/components/il-nav/default-collapsed.html'),
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2');
      }
    },
    {
      'label': 'navigation-subnav-open',
      'url': util.url('/tests/components/il-nav/default-expanded.html'),
      'viewports': [viewports.desktop]
    },
    {
      'label': 'navigation-subnav-link-hover',
      'url': util.url('/tests/components/il-nav/default-expanded.html'),
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-2B');
      }
    },
    {
      'label': 'navigation-subnav-link-focus',
      'url': util.url('/tests/components/il-nav/default-expanded.html'),
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-2B');
      }
    },
  ];
}