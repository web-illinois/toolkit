const {dropdownIsVisible, elementHasFocus, moveFocus} = require('../../_includes/navigation');

beforeEach(async () => {
    await page.goto(localhost + '/tests/navigation/submenu-open.html');
});

test("submenu is open", async () => {
    const isVisible = await dropdownIsVisible(page, '#list-1');
    await expect(isVisible).toBeTruthy();
});

describe("when a submenu toggle has focus", () => {
    beforeEach(async () => {
        await moveFocus(page, '#button-1');
    });

    describe("pressing tab", () => {
        beforeEach(async () => {
            await page.keyboard.press('Tab');
        });

        test("moves focus to the first submenu link", async () => {
            const hasFocus = await elementHasFocus(page, '#link-1A');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing enter", () => {
        beforeEach(async () => {
            await page.keyboard.press('Enter');
        });

        test("closes the submenu", async () => {
            const isVisible = await dropdownIsVisible(page, '#list-1');
            await expect(isVisible).toBeFalsy();
        });
    });

    describe("pressing the space bar", () => {
        beforeEach(async () => {
            await page.keyboard.press('Space');
        });

        test("closes the submenu", async () => {
            const isVisible = await dropdownIsVisible(page, '#list-1');
            await expect(isVisible).toBeFalsy();
        });
    });
});
