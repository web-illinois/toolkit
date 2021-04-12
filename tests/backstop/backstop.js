const glob = require('fast-glob');
const path = require('path');

const desktop = {
    "label": "desktop",
    "description": "Desktop",
    "width": 1280,
    "height": 1024
};

const hdtv = {
    "label": "hdtv",
    "width": 1920,
    "height": 1080
};

const iphone = {
    "label": "iphone",
    "width": 375,
    "height": 812
};

const viewports = { desktop, iphone, hdtv };

const templateDir = path.resolve(path.join(__dirname, '..', '..', 'templates'));

const scenarios = [];
glob.sync('**/*.test.visual.js', { cwd: templateDir }).forEach(file => {
    const filePath = path.join(templateDir, file);
    const fileScenarios = require(filePath)(viewports);
    fileScenarios.forEach(s => s.file = file);
    scenarios.push(...fileScenarios);
})

module.exports = {
    "id": "web-toolkit",
    "viewports": [iphone, desktop, hdtv],
    "scenarios": scenarios,
    "paths": {
        "bitmaps_reference": "tests/backstop/bitmaps_reference",
        "engine_scripts": "tests/backstop/engine_scripts",
        "bitmaps_test": "var/backstop/bitmaps",
        "html_report": "var/backstop/html",
        "json_report": "var/backstop/json"
    },
    "report": ["json"],
    "engine": "puppeteer",
    "onReadyScript": "onReady.js",
    "asyncCaptureLimit": 5,
    "debugWindow": false,
    "debug": false
};
