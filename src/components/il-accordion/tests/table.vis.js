const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: 'accordion-table',
      caption: 'Accordion with table',
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}