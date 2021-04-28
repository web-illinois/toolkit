module.exports = {
    "preset": "jest-puppeteer",
    "rootDir": "tests",
    "testMatch": ["**/*.func.js"],
    "reporters": [
        "default",
        ["jest-html-reporter", {
            "outputPath": "./var/jest/results.html",
            "pageTitle": "Web toolkit"
        }]
    ]
};
