const glob = require('fast-glob');
const path = require('path');
const viewports = require('./viewports.json');

const scenarios = [];
glob.sync('tests/**/*.vis.js').forEach(file => {
    const fileScenarios = require(path.join(__dirname, file))(viewports);
    fileScenarios.forEach(s => s.file = file);
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
