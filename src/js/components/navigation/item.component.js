import { LitElement } from 'lit';

export default class NavigationItem extends LitElement {
  static get properties() {
    return {
      active: { type: Boolean, default: false, attribute: false },
      compact: { type: Boolean, default: false, attribute: false },
      current: { type: Boolean, default: false, attribute: true }
    };
  }

  constructor() {
    super();
    this.current = false;
    this.active = false;
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  getNavigation() {
    let parent = this.parentElement;
    while (parent) {
      if (parent.nodeName === 'IL-NAV') {
        return parent;
      }
      parent = parent.parentElement;
    }
    return undefined;
  }

  handleContentLoaded(evt) {
    this.compact = this.getNavigation().compact;
    this.getNavigation().addEventListener('compact', evt => this.compact = evt.detail);
    const link = this.getLink();
    if (link) {
      link.addEventListener('keydown', this.handleLinkKeypress.bind(this));
    }
  }

  handleLinkKeypress(evt) {
    if (evt.code === 'Space') {
      evt.preventDefault();
      window.location.href = this.getLink().href;
    }
    else if (evt.code === 'ArrowLeft') {
      evt.preventDefault();
      const event = new CustomEvent('exit', { detail: 'back' });
      this.dispatchEvent(event);
    }
    else if (evt.code === 'ArrowRight') {
      evt.preventDefault();
      const event = new CustomEvent('exit', { detail: 'forward' });
      this.dispatchEvent(event);
    }
  }
}