
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

async function hoverOverSectionToggle(page, sel) {
  const coords = await page.evaluate(sel => {
    const rect = document.querySelector(sel).shadowRoot.querySelector('.indicator').getBoundingClientRect();
    return {
      x: rect.left + Math.round(rect.width/2),
      y: rect.top + Math.round(rect.height/2)
    };
  }, [sel]);
  return page.mouse.move(coords.x, coords.y);
}

function sectionisExpanded(page, sel) {
  return page.evaluate(sel => {
    return document.querySelector(sel).expanded;
  }, [sel])
}

module.exports = {
  dropdownIsVisible,
  getSectionToggle,
  hoverOverSectionToggle,
  sectionisExpanded
}