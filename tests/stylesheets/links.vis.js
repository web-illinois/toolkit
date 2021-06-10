const util = require('../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, 'label': 'links',
      'viewports': [viewports.desktop]
    },
    {
      url, 'label': 'links-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'links-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'links-inline-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#inline-link');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'links-inline-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#inline-link');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'links-linebreak-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#link-with-linebreak');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'links-linebreak-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#link-with-linebreak');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'links-multiline-hover',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover('#multiline-link');
        await page.waitFor(500);
      }
    },
    {
      url, 'label': 'links-multiline-focus',
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, '#multiline-link');
        await page.waitFor(500);
      }
    }
  ];
}