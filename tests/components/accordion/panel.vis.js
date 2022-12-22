const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: 'accordion-panel',
      caption: 'Accordion single planel',
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}