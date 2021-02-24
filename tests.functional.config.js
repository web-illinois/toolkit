module.exports = {
    "preset": "jest-puppeteer",
    "rootDir": "templates",
    "testMatch": ["**/*.test.js"],
    "globals": {
        "localhost": "http://localhost:8080"
    }
};
