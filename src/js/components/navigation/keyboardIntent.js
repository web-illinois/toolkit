class KeyboardIntent {
  constructor(event, navItem) {
    this.event = event;
    this.navItem = navItem;
  }

  get key() {
    return this.getKey();
  }

  getKey() {
    return this.event.key;
  }

  isCollapse() {

  }

  isDownArrow() {
    return this.key === 'ArrowDown';
  }

  isEscape() {
    return this.key === 'Escape' || this.key === 'Esc';
  }

  isEnter() {

  }

  isExpand() {

  }

  isGoToNext() {
    return this.isDownArrow();
  }

  isGoToPrevious() {
    return this.isUpArrow();
  }

  isSpaceBar() {

  }

  isToggle() {

  }

  isUpArrow() {
    return this.key === 'ArrowUp';
  }
}

module.exports = KeyboardIntent;