export default function Cursor(elem) {

  this.handleKeydown = function (evt) {
    if (evt.key === 'ArrowLeft') {
      moveCursorLeft();
    }
    if (evt.key === 'ArrowRight') {
      moveCursorRight();
    }
    if (evt.key === 'ArrowUp') {
      moveCursorUp();
    }
    if (evt.key === 'ArrowDown') {
      moveCursorDown();
    }
  }

  function getFocusableElements() {
    return elem.querySelectorAll('a');
  }

  function getFocusableRelativePosition(item, x, y) {
    const rect = item.getBoundingClientRect();
    const centerX = window.scrollX + rect.x + rect.width / 2;
    const centerY = window.scrollY + rect.y + rect.height / 2;
    const opp = Math.abs(centerX - x);
    const adj = Math.abs(centerY - y);
    const dist = (opp + 1) * (adj + 1);
    return {item, centerX, centerY, opp, adj, dist};
  }

  function getFocusedElement() {
    return document.activeElement;
  }

  function moveCursorDown() {
    const focusables = []
    const cursorElement = getFocusedElement();
    if (!cursorElement) return;
    const rect = cursorElement.getBoundingClientRect();
    const cursorX = window.scrollX + rect.x + rect.width / 2;
    const cursorY = window.scrollY + rect.y + rect.height; // Bottom edge of item
    for (const focusable of getFocusableElements()) {
      if (focusable === cursorElement) {
        continue;
      }
      const rect = focusable.getBoundingClientRect();
      if (rect.bottom <= cursorY) {
        continue;
      }
      focusables.push(getFocusableRelativePosition(focusable, cursorX, cursorY));
    }
    if (focusables.length > 0) {
      sortNearby(focusables);
      moveCursorTo(focusables[0].item);
    }
  }

  function moveCursorLeft() {
    const focusables = []
    const cursorElement = getFocusedElement();
    if (!cursorElement) return;
    const rect = cursorElement.getBoundingClientRect();
    const cursorX = window.scrollX + rect.x; // Left edge of element
    const cursorY = window.scrollY + rect.y + rect.height / 2;
    for (const focusable of getFocusableElements()) {
      if (focusable === cursorElement) {
        continue;
      }
      const rect = focusable.getBoundingClientRect();
      if (rect.left >= cursorX) {
        continue;
      }
      focusables.push(getFocusableRelativePosition(focusable, cursorX, cursorY));
    }
    if (focusables.length > 0) {
      sortNearby(focusables);
      moveCursorTo(focusables[0].item);
    }
  }

  function moveCursorTo(elem) {
    elem.focus();
  }

  function moveCursorRight() {
    const focusables = []
    const cursorElement = getFocusedElement();
    if (!cursorElement) return;
    const rect = cursorElement.getBoundingClientRect();
    const cursorX = window.scrollX + rect.x + rect.width; // right edge of element
    const cursorY = window.scrollY + rect.y + rect.height / 2;
    for (const focusable of getFocusableElements()) {
      if (focusable === cursorElement) {
        continue;
      }
      const rect = focusable.getBoundingClientRect();
      if (rect.right <= cursorX) {
        continue;
      }
      focusables.push(getFocusableRelativePosition(focusable, cursorX, cursorY));
    }
    if (focusables.length > 0) {
      sortNearby(focusables);
      moveCursorTo(focusables[0].item);
    }
  }

  function moveCursorUp() {
    const focusables = []
    const cursorElement = getFocusedElement();
    if (!cursorElement) return;
    const rect = cursorElement.getBoundingClientRect();
    const cursorX = window.scrollX + rect.x + rect.width / 2;
    const cursorY = window.scrollY + rect.y; // Top edge of item
    for (const focusable of getFocusableElements()) {
      if (focusable === cursorElement) {
        continue;
      }
      const rect = focusable.getBoundingClientRect();
      if (rect.top >= cursorY) {
        continue;
      }
      focusables.push(getFocusableRelativePosition(focusable, cursorX, cursorY));
    }
    if (focusables.length > 0) {
      sortNearby(focusables);
      moveCursorTo(focusables[0].item);
    }
  }

  function nearbyCmp(a, b) {
    return a.dist - b.dist;
  }

  function sortNearby(elements) {
    elements.sort(nearbyCmp);
  }
}