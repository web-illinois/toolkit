
function dropdownIsVisible(page, sel) {
    return page.evaluate((sel) => {
        return document.querySelector(sel).previousElementSibling.getAttribute('aria-expanded') === 'true';
    }, [sel]);
}

function elementHasFocus(page, sel) {
    return page.evaluate((sel) => {
        return document.querySelector(sel) === document.activeElement;
    }, [sel]);
}

function moveFocus(page, sel) {
    return page.evaluate((sel) => document.querySelector(sel).focus(), [sel]);
}

beforeEach(async () => {
    await page.goto('http://localhost:8080/tests/header/nav/index.html');
});

describe("when a top-level link with a submenu has focus and its submenu is closed", () => {
    beforeEach(async () => {
        await moveFocus(page, '#link-1');
    });

    describe("pressing the down arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowDown');
        });

        test('opens the submenu', async () => {
            const isVisible = await dropdownIsVisible(page, '#list-1');
            await expect(isVisible).toBeTruthy();
        });

        test('moves focus to the first link in the submenu', async () => {
            const hasFocus = await elementHasFocus(page, '#link-1A');
            await expect(hasFocus).toBeTruthy();
        });
    });

    describe("pressing the up arrow", () => {
        beforeEach(async () => {
            await page.keyboard.press('ArrowUp');
        });

        test('opens the submenu', async () => {
            const isVisible = await dropdownIsVisible(page, '#list-1');
            await expect(isVisible).toBeTruthy();
        });

        test('moves focus to the last link in the submenu', async () => {
            const hasFocus = await elementHasFocus(page, '#link-1C');
            await expect(hasFocus).toBeTruthy();
        });
    });
});

describe("when a top-level submenu toggle has focus", () => {
    beforeEach(async () => {
        await moveFocus(page, '#button-1');
    });

    describe("when its submenu is closed", () => {

        describe("pressing tab", () => {
            beforeEach(async () => {
                await page.keyboard.press('Tab');
            });

            test("moves focus to the next top-level link", async () => {
                const hasFocus = await elementHasFocus(page, '#link-2');
                await expect(hasFocus).toBeTruthy();
            });
        });

        describe("pressing enter", () => {
            beforeEach(async () => {
                await page.keyboard.press('Enter');
            });

            test("opens the submenu", async () => {
                const isVisible = await dropdownIsVisible(page, '#list-1');
                await expect(isVisible).toBeTruthy();
            });
        });

        describe("pressing the space bar", () => {
            beforeEach(async () => {
                await page.keyboard.press('Space');
            });

            test("opens the submenu", async () => {
                const isVisible = await dropdownIsVisible(page, '#list-1');
                await expect(isVisible).toBeTruthy();
            });
        });
    })

    describe("when its submenu is open", () => {
        beforeEach(async () => {
            await page.evaluate(() => document.getElementById('button-1').setAttribute('aria-expanded', 'true'));
        });

        test("submenu is open", async () => {
            const isVisible = await dropdownIsVisible(page, '#list-1');
            await expect(isVisible).toBeTruthy();
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
    })
});



test('opening one dropdown closes other dropdowns', async () => {
    await moveFocus(page, '#button-1');
    await page.keyboard.press('Enter');
    await moveFocus(page, '#button-2');
    await page.keyboard.press('Enter');

    const firstDropdownIsVisible = await dropdownIsVisible(page, '#list-1');
    await expect(firstDropdownIsVisible).toBeFalsy();

    const secondDropdownIsVisible = await dropdownIsVisible(page, '#list-2');
    await expect(secondDropdownIsVisible).toBeTruthy();
});
