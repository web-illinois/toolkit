const glob = require('fast-glob');
const path = require('path');
const util = require('./tests/tests.util');
const viewports = require('./viewports.json');

function makeId(file, config) {
  const relativePath = path.relative('tests', file);
  let id = relativePath.replace(/\.vis\.js$/, '').replace(/[\\\/]/g, '_');
  if (config.test) {
    id += '_' + config.test;
  }
  else if (config.variant) {
    id += '_' + config.variant;
  }
  else if (config.suffix) {
    id += '_' + config.suffix;
  }
  return id;
}

const scenarios = [];
glob.sync('tests/**/*.vis.js').forEach(file => {
  const filePath = path.join(__dirname, file);
  const fileScenarios = require(filePath)(viewports);
  fileScenarios.forEach(s => {
    const id = makeId(file, s);
    s.file = file;
    if (!s.url) {
      s.url = util.testUrl(filePath);
    }
    if (!s.label) {
      s.label = id;
    }
  });
  scenarios.push(...fileScenarios);
})

module.exports = {
  id: "web-toolkit",
  //fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  viewports: Object.values(viewports),
  scenarios: scenarios,
  paths: {
    bitmaps_reference: "tests/_reference",
    engine_scripts: "tests/_scripts",
    bitmaps_test: "var/backstop/images",
    html_report: "var/backstop/html",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  onReadyScript: "onReady.js",
  asyncCaptureLimit: 5,
  dockerCommandTemplate: "docker run -e BACKSTOP_ENV=docker --rm -it --mount type=bind,source=\"{cwd}\",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}",
  debugWindow: false,
  debug: false
};
