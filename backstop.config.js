const glob = require('fast-glob');
const path = require('path');
const util = require('./tests/tests.util');
const viewports = require('./viewports.json');

function makeLabelFromPath(filePath) {
  const relativePath = path.relative('tests', filePath);
  return relativePath.replace(/\.vis\.js$/, '').replace(/[\\\/]/g, '--');
}

const scenarios = [];
glob.sync('tests/**/*.vis.js').forEach(file => {
  const filePath = path.join(__dirname, file);
  const fileScenarios = require(filePath)(viewports);
  fileScenarios.forEach(s => {
    s.file = file;
    if (!s.url) {
      s.url = util.testUrl(filePath);
    }
    if (!s.label) {
      s.label = makeLabelFromPath(file);
      if (s.test) {
        s.label += '--' + s.test;
      }
      else if (s.variant) {
        s.label += '--' + s.variant;
      }
      else if (s.suffix) {
        s.label += '--' + s.suffix;
      }
    }
  });
  scenarios.push(...fileScenarios);
})

module.exports = {
  "id": "web-toolkit",
  "viewports": Object.values(viewports),
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "tests/_reference",
    "engine_scripts": "tests/_scripts",
    "bitmaps_test": "var/backstop/images",
    "html_report": "var/backstop/html",
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "onReadyScript": "onReady.js",
  "asyncCaptureLimit": 5,
  "dockerCommandTemplate": "docker run -e BACKSTOP_ENV=docker --rm -it --mount type=bind,source=\"{cwd}\",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}",
  "debugWindow": false,
  "debug": false
};
