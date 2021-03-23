
const host = 'http://127.0.0.1:8080';

const desktop = {
    "label": "desktop",
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

module.exports = {
    "id": "brand-toolkit",
    "viewports": [iphone, desktop, hdtv],
    "scenarios": [
        {
            'label': 'colors',
            'url': host + '/tests/colors/',
            'viewports': [desktop]
        },
        {
            'label': 'fonts-source-sans',
            'url': host + '/tests/fonts/source-sans/',
            'viewports': [hdtv]
        },
        {
            'label': 'fonts-source-sans-fixed',
            'url': host + '/tests/fonts/source-sans-fixed/',
            'viewports': [hdtv]
        },
        {
            'label': 'fonts-source-serif',
            'url': host + '/tests/fonts/source-serif/',
            'viewports': [hdtv]
        },
        {
            'label': 'fonts-source-serif-fixed',
            'url': host + '/tests/fonts/source-serif-fixed/',
            'viewports': [hdtv]
        },
        {
            'label': 'fonts-montserrat',
            'url': host + '/tests/fonts/montserrat/',
            'viewports': [hdtv]
        },
        {
            'label': 'fonts-montserrat-alt',
            'url': host + '/tests/fonts/montserrat-alt/',
            'viewports': [hdtv]
        },
        {
            'label': 'fonts-fjalla-one',
            'url': host + '/tests/fonts/fjalla-one/',
            'viewports': [hdtv]
        },
        {
            'label': 'icons-solid',
            'url': host + '/tests/icons/solid/',
            'viewports': [desktop]
        },
        {
            'label': 'icons-line',
            'url': host + '/tests/icons/line/',
            'viewports': [desktop]
        }
    ],
    "paths": {
        "bitmaps_reference": "tests/backstop/bitmaps_reference",
        "engine_scripts": "tests/backstop/engine_scripts",
        "bitmaps_test": "var/backstop/bitmaps_reference",
        "html_report": "var/backstop/html_report",
        "ci_report": "var/backstop/ci_report"
    },
    "report": ["browser"],
    "engine": "puppeteer",
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "debugWindow": false,
    "debug": false
};
