const nav = require('../../../_includes/navigation');

beforeEach(async () => {
    await page.goto(localhost + '/tests/components/il-nav/compact-expanded.html');
});

describe("in the compact view", () => {

    describe("when a submenu is open", () => {

        describe("when the last submenu link has focus", () => {
            beforeEach(async () => {
                await nav.moveFocus(page, '#link-2C');
            });

            describe("pressing the down arrow", () => {
                beforeEach(async () => {
                    await page.keyboard.press('ArrowDown');
                });

                test("moves focus to the next top-level link", async () => {
                    const hasFocus = await nav.elementHasFocus(page, '#link-3');
                    await expect(hasFocus).toBeTruthy();
                });
            });
        });

        describe("when the first submenu link has focus", () => {
            beforeEach(async () => {
                await nav.moveFocus(page, '#link-2A');
            });

            describe("pressing the up arrow", () => {
                beforeEach(async () => {
                    await page.keyboard.press('ArrowUp');
                });

                test("moves focus to the top-level link", async () => {
                    const hasFocus = await nav.elementHasFocus(page, '#link-2');
                    await expect(hasFocus).toBeTruthy();
                });
            });
        });
    });
});
