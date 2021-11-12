const util = require('../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  const linkGroup = 'links-assigned';
  const linkIds = [
    'link-blank',
    'link-override',
    'link-control',
    'link-class'
  ];
  const tests = [
    {
      url, 'label': linkGroup,
      'viewports': [viewports.desktop]
    },
  ];
  linkIds.forEach(id => {
    tests.push({
      url, 'label': `${linkGroup}-${id}-hover`,
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await page.hover(`#${id}`);
        await page.waitFor(500);
      }
    });
    tests.push({
      url, 'label': `${linkGroup}-${id}-focus`,
      'viewports': [viewports.desktop],
      'onReady': async (page, scenario) => {
        await util.moveFocus(page, `#${id}`);
        await page.waitFor(500);
      }
    });
  })
  return tests;
}