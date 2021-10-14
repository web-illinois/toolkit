import { LitElement, html } from 'lit';
import NavigationItem from './item.component';
import styles from './link.css';

class NavigationLink extends NavigationItem {
  static get properties() {
    return {
      compact: { type: Boolean, default: false, attribute: false },
      href: { type: String, attribute: true },
      label: { type: String, attribute: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  handleContentLoaded(evt) {
    this.compact = this.getNavigation().compact;
    this.getNavigation().addEventListener('compact', evt => this.compact = evt.detail);
    const link = this.getLink();
    if (link) {
      link.addEventListener('keydown', this.handleLinkKeypress.bind(this));
    }
  }

  getLink() {
    return this.querySelector('a');
  }

  handleLinkKeypress(evt) {
    if (evt.code === 'Space') {
      evt.preventDefault();
      window.location.href = this.getLink().href;
    }
    else if (evt.code === 'Escape') {
      evt.preventDefault();
      if (this.expanded) {
        this.collapse();
      }
    }
    else if (evt.code === 'ArrowDown') {
      evt.preventDefault();
      if (!this.expanded) {
        this.expandAndMoveFocusToFirstSubmenuLink();
      }
      else {
        this.moveFocusToFirstSubmenuLink();
      }
    }
    else if (evt.code === 'ArrowUp') {
      evt.preventDefault();
      if (!this.expanded) {
        this.expandAndMoveFocusToLastSubmenuLink();
      }
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

  render() {
    const view = this.compact ? 'compact' : 'full';
    return html`<li class=${view}>
  <slot>
    <a href=${this.href}>${this.label}</a>
  </slot>
</li>`
  }
}

customElements.define('il-nav-link', NavigationLink);
