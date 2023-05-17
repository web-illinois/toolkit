import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; 

const basePath = 'http://localhost:5174';

function accessibilityTest(url, name, componentName) {
    test(`accessibility for ${name}`, async ({ page }) => {
        await page.goto(basePath + url);
        const accessibilityScanResults = await new AxeBuilder({ page })
            .include(componentName)
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });
}

function visualDesktopTest(url, name, componentName) {
    test(`visual testing for ${name}`, async ({ page }) => {
        await page.goto(basePath + url);
        await expect(page.locator(componentName)).toHaveScreenshot();
    });
}

function visualMobileTest(url, name, componentName) {
    test(`visual testing mobile for ${name}`, async ({ page }) => {
        await page.setViewportSize({
            width: 375,
            height: 812,
          });
        await page.goto(basePath + url);
        await expect(page.locator(componentName)).toHaveScreenshot();
    });
}

function visualDesktopSnapshot(url, name, componentName) {
    test(`desktop for ${name}`, async ({ page }) => {
        await page.goto(basePath + url);
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

module.exports = {
    accessibilityTest,
    visualDesktopTest,
    visualMobileTest,
    visualDesktopSnapshot,
    visualMobileSnapshot
}