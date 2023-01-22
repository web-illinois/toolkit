const util = require("../../../tests.util");
const nav = require("../nav.util");

module.exports = (viewports) => {
  return [
    {
      'viewports': [viewports.desktop]
    },
    {
      'test': 'hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        //await page.hover('#label');
        await nav.hoverOverSectionToggle(page, '#section');
      }
    },
    {
      'test': 'focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.evaluate(() => {
          document.querySelector('#section').shadowRoot.querySelector('.toggle').focus();
        })
      }
    }
  ];
}