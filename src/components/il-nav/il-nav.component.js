import { LitElement, html } from 'lit';
import Link from './link';
import styles from './il-nav.css';
import "./il-nav.scss";

class Navigation extends LitElement {
  static get properties() {
    return {
      compact: { type: Boolean, default: false, attribute: true, reflect: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._compact = false;
    this._links = [];
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  get compact() {
    return this._compact;
  }

  set compact(isCompact) {
    const wasCompact = this._compact;
    if (wasCompact !== isCompact) {
      this._compact = isCompact;
      this.requestUpdate('compact', wasCompact);
      this.updateComplete.then(() => {
        const evt = new CustomEvent('compact', { detail: isCompact });
        this.dispatchEvent(evt);
      });
    }
  }

  getHeader() {
    return this.closest('il-header');
  }

  handleContentLoaded(evt) {
    const observer = new MutationObserver(this.handleMutation.bind(this));
    observer.observe(this, { attributes: false, childList: true, subtree: true });
    this.updateLinks();
  }

  handleMutation(evt) {
    this.updateLinks();
  }

  updateLinks() {
    this._links = [];
    this.querySelectorAll('a').forEach(a => {
      const link = new Link(a);
      // TODO: Add event listeners
      this._links.push(link);
    })
  }

  handleHeaderViewChange(evt) {
    console.debug(evt);
    this.compact = evt.detail === 'compact';
  }

  handleSectionCollapse(evt) {
  }

  handleSectionExit(evt) {
    const section = evt.currentTarget;
    if (evt.detail === 'back') {
      if (section.previousElementSibling) {
        if (section.previousElementSibling.children.length > 0) {
          section.previousElementSibling.children[0].focus();
        } else {
          section.previousElementSibling.focus();
        }
      } else {
        if (section.parentNode.lastElementChild.children.length > 0) {
          section.parentNode.lastElementChild.children[0].focus();
        } else {
          section.parentNode.lastElementChild.focus();
        }
      }
    } else if (evt.detail === 'forward') {
      if (section.nextElementSibling) {
        if (section.nextElementSibling.children.length > 0) {
          section.nextElementSibling.children[0].focus();
        } else {
          section.nextElementSibling.focus();
        }
      } else {
        if (section.parentNode.firstElementChild.children.length > 0) {
          section.parentNode.firstElementChild.children[0].focus();
        } else {
          section.parentNode.firstElementChild.focus();
        }
      }
    }
  }

  handleSectionExpand(evt) {
    const activeSection = evt.currentTarget;
    this.getSections().forEach(section => {
      if (section.expanded && section !== activeSection) {
        section.collapse();
      }
    });
  }

  getSections() {
    return this.querySelectorAll('il-nav-section, il-nav-link');
  }

  render() {
    return html`
        <nav aria-label='main menu'>
          <slot></slot>
        </nav>`
  }
}

customElements.define('il-nav', Navigation);
