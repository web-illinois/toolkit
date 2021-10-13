const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: "videofeature-default",
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv],
      'onReady': async (page, scenario) => {
        await page.evaluate(() => document.querySelectorAll('il-video-feature').forEach(v => {
          v.shadowRoot.querySelector('iframe').style.visibility = 'hidden';
        }));
      }
    }
  ]
}