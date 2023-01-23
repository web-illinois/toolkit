const util = require("../../../tests.util");
const nav = require("../nav.util");

module.exports = (viewports) => {
  return [
    {
      'viewports': [viewports.desktop]
    },
    {
      'test': 'link-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link');
      }
    },
    {
      'test': 'link-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link');
      }
    },
    {
      'test': 'toggle-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        //await page.hover('#label');
        await nav.hoverOverSectionToggle(page, '#section');
      }
    },
    {
      'test': 'toggle-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.evaluate(() => {
          document.querySelector('#section').shadowRoot.querySelector('.toggle').focus();
        })
      }
    }
  ];
}