module.exports = {
    "preset": "jest-puppeteer",
    "rootDir": "templates",
    "testMatch": ["**/*.test.js"],
    "globals": {
        "localhost": "http://localhost:8080"
    },
    "reporters": [
        "default",
        ["jest-html-reporter", {
            "outputPath": "./html/tests/report.html",
            "pageTitle": "Functional tests"
        }]
    ]
};
