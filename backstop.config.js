const glob = require('fast-glob');
const path = require('path');

const viewports = {
    desktop: {
        "label": "desktop",
        "description": "Desktop",
        "width": 1280,
        "height": 1024
    },
    iphone: {
        "label": "iphone",
        "description": "iPhone",
        "width": 375,
        "height": 812
    },
    hdtv:{
        "label": "hdtv",
        "description": "HDTV",
        "width": 1920,
        "height": 1080
    }
};

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
