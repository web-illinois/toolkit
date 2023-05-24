import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

function accessibilityTest(url, name, componentName) {
    test(`accessibility for ${name}`, async ({ page }) => {
        await page.goto(url);
        const accessibilityScanResults = await new AxeBuilder({ page })
          .include(componentName)
          .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
}

function visualDesktopTest(url, name, componentName) {
    test(`visual testing for ${name}`, async ({ page }) => {
        await page.goto(url);
        await expect(page.locator(componentName)).toHaveScreenshot();
    });
}

function visualMobileTest(url, name, componentName) {
    test(`visual testing mobile for ${name}`, async ({ page }) => {
        await page.setViewportSize({
            width: 375,
            height: 812,
        });
        await page.goto(url);
        await expect(page.locator(componentName)).toHaveScreenshot();
    });
}

function visualDesktopSnapshot(url, name, componentName) {
    test(`desktop for ${name}`, async ({ page }) => {
        await page.goto(url);
        await page.locator(componentName).screenshot({ path: `./screenshots/desktop/${name}.png` });
    });
}

function visualMobileSnapshot(url, name, componentName) {
    test(`mobile for ${name}`, async ({ page }) => {
        await page.setViewportSize({
            width: 375,
            height: 812,
        });
        await page.goto(basePath + url);
        await page.locator(componentName).screenshot({ path: `./screenshots/mobile/${name}.png` });
    });
}


const componentName = 'il-statistic';
const htmlTemplates = ['/components/statistic/statistic.html', '/components/statistic/statistic-noheader.html'];
const themes = ['il-theme-gray', 'il-theme-blue', 'il-theme-white', 'il-theme-blue-gradient'];
const sizes = ['il-size-small', 'il-size-medium', 'il-size-large', 'il-size-xlarge'];

for (const baseUrl of htmlTemplates) {
    accessibilityTest(baseUrl, `${baseUrl} default`, componentName);
    visualDesktopTest(baseUrl, `${baseUrl} default`, componentName);
    visualDesktopSnapshot(baseUrl, `${baseUrl} default`, componentName);
    visualMobileTest(baseUrl, `${baseUrl} default`, componentName);
    visualMobileSnapshot(baseUrl, `${baseUrl} default`, componentName);

    for (const theme of themes) {
        let url = `${baseUrl}?class=${theme}`;
        accessibilityTest(url, `${baseUrl} theme ${theme}`, componentName);
        visualDesktopTest(url, `${baseUrl} theme ${theme}`, componentName);
        visualDesktopSnapshot(url, `${baseUrl} theme ${theme}`, componentName);
        visualMobileTest(url, `${baseUrl} theme ${theme}`, componentName);
        visualMobileSnapshot(url, `${baseUrl} theme ${theme}`, componentName);
    }

    for (const size of sizes) {
        let url = `${baseUrl}?class=${size}`;
        accessibilityTest(url, `${baseUrl} size ${size}`, componentName);
        visualDesktopTest(url, `${baseUrl} size ${size}`, componentName);
        visualDesktopSnapshot(url, `${baseUrl} size ${size}`, componentName);
        visualMobileTest(url, `${baseUrl} size ${size}`, componentName);
        visualMobileSnapshot(url, `${baseUrl} size ${size}`, componentName);
    }
}
