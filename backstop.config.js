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

const scenarios = [];
glob.sync('tests/**/*.test.visual.js').forEach(file => {
    const fileScenarios = require(path.join(__dirname, file))(viewports);
    fileScenarios.forEach(s => s.file = file);
    scenarios.push(...fileScenarios);
})

module.exports = {
    "id": "web-toolkit",
    "viewports": [iphone, desktop, hdtv],
    "scenarios": scenarios,
    "paths": {
        "bitmaps_reference": "tests/_reference",
        "engine_scripts": "tests/_scripts",
        "bitmaps_test": "var/backstop/images",
        "html_report": "var/backstop/html",
    },
    "report": ["browser"],
    "engine": "puppeteer",
    "onReadyScript": "onReady.js",
    "asyncCaptureLimit": 5,
    "debugWindow": false,
    "debug": false
};
