import { LitElement, html, css } from 'lit';
import styles from './section-nav.css.js';

class SectionNavigation extends LitElement {
  static get properties() {
    return {
      compact: { type: Boolean, attribute: true, default: false, reflect: true },
      expanded: { type: Boolean, attribute: false }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.compact = false;
    this.expanded = false;
    this.handleToggleClick = this.handleToggleClick.bind(this);
    document.addEventListener('DOMContentLoaded', this.handleDocumentLoaded.bind(this));
  }

  getLayoutSection() {
    return this.closest('il-section-with-sidebar');
  }

  hasLayoutSection() {
    return this.getLayoutSection() !== null;
  }

  // Event handlers

  handleDocumentLoaded(evt) {
    if (this.hasLayoutSection()) {
      const layout = this.getLayoutSection();
      this.compact = layout.mode === 'compact';
      layout.addEventListener('modeChange', evt => {
        this.compact = evt.detail === 'compact';
      });
    }
    else {
      // Deprecated
      window.addEventListener('resize', this.handleWindowResize.bind(this));
      this.handleWindowResize();
    }
  }

  handleToggleClick() {
    this.expanded = !this.expanded;
  }

  handleWindowResize() {
    this.compact = !window.matchMedia("(min-width: 992px)").matches;
  }

  // Render

  render() {
    const mode = this.compact ? 'compact' : 'full';
    const expanded = this.expanded ? 'expanded' : 'collapsed';
    return html`
      <nav class=${mode + ' ' + expanded}>
        <div class="header">
          <h2>In this section</h2>
          <button class="il-section-nav__toggle" @click=${this.handleToggleClick}>
            Toggle section navigation menu
            <svg aria-label="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" role="presentation">
              <path
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
            </svg>
          </button>
        </div>
        <div class="menu">
          <slot></slot>
        </div>
      </nav>
    `;
  }
}

customElements.define('il-section-nav', SectionNavigation);
