
function dropdownIsVisible(page, sel) {
  return page.evaluate((sel) => {
    return document.querySelector(sel).previousElementSibling.getAttribute('aria-expanded') === 'true';
  }, [sel]);
}

function getSectionToggle(page, sel) {
  return page.evaluateHandle(sel => {
    return document.querySelector(sel).shadowRoot.querySelector('button');
  }, [sel])
}

function sectionisExpanded(page, sel) {
  return page.evaluate(sel => {
    return document.querySelector(sel).expanded;
  }, [sel])
}

module.exports = {
  dropdownIsVisible,
  getSectionToggle,
  sectionisExpanded
}