module.exports = {
    "preset": "jest-puppeteer",
    "rootDir": "../../templates",
    "testMatch": ["**/*.test.func.js"],
    "globals": {
        "localhost": "http://localhost:8080"
    }
};
