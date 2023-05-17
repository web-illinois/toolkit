const testScripts = require('../../testScripts.js');

const componentName = 'il-statistic';
const htmlTemplates = ['/components/statistic/statistic.html', '/components/statistic/statistic-noheader.html'];
const themes = ['il-theme-gray', 'il-theme-blue', 'il-theme-white', 'il-theme-blue-gradient'];
const sizes = ['il-size-small', 'il-size-medium', 'il-size-large', 'il-size-xlarge'];

for (const baseUrl of htmlTemplates) {
    testScripts.accessibilityTest(baseUrl, `${baseUrl} default`, componentName);
    testScripts.visualDesktopTest(baseUrl, `${baseUrl} default`, componentName);
    testScripts.visualMobileTest(baseUrl, `${baseUrl} default`, componentName);

    for (const theme of themes) {
        let url = `${baseUrl}?class=${theme}`;
        testScripts.accessibilityTest(url, `${baseUrl} theme ${theme}`, componentName);
        testScripts.visualDesktopTest(url, `${baseUrl} theme ${theme}`, componentName);
        testScripts.visualMobileTest(url, `${baseUrl} theme ${theme}`, componentName);
    }

    for (const size of sizes) {
        let url = `${baseUrl}?class=${size}`;
        testScripts.accessibilityTest(url, `${baseUrl} size ${size}`, componentName);
        testScripts.visualDesktopTest(url, `${baseUrl} size ${size}`, componentName);
        testScripts.visualMobileTest(url, `${baseUrl} size ${size}`, componentName);
    }
}
