const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: 'accordion-white',
      caption: 'Accordion white theme',
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}