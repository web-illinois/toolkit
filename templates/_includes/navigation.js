
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

module.exports = { dropdownIsVisible, elementHasFocus, moveFocus }