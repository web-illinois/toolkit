
const host = 'http://127.0.0.1:8080';

const desktop = {
    "label": "desktop",
    "width": 1280,
    "height": 1024
};

const iphone = {
    "label": "iphone",
    "width": 375,
    "height": 812
};

module.exports = {
    "id": "web-components",
    "viewports": [desktop],
    "scenarios": [
        {
            'label': 'test1-red-hover',
            'url': host + '/components/test1/',
            'actions': [
                {'hover': '#test-one >>> #red-button'}
            ]
        },
        {
            'label': 'test1-red',
            'url': host + '/components/test1/',
            'actions': [
                { 'click': '#test-one >>> #red-button' }
            ]
        },
        {
            'label': 'test1-blue-hover',
            'url': host + '/components/test1/',
            'actions': [
                { 'hover': '#test-one >>> #blue-button' }
            ]
        },
        {
            'label': 'test1-blue',
            'url': host + '/components/test1/',
            'actions': [
                { 'click': '#test-one >>> #blue-button' }
            ]
        },
        {
            'label': 'test2--click-and-hover',
            'url': host + '/components/test2/',
            'actions': [
                { 'click': '#test-two >>> #red-button' },
                { 'hover': '#test-two >>> #blue-button' }
            ]
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
