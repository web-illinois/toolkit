import { LitElement, html, css } from 'lit';
import Debugger from '../../debug';
import styles from './section.css'

class NavigationSection extends LitElement {

  // Class methods

  static get properties() {
    return {
      align: { type: String, default: null },
      current: { type: Boolean, default: false, reflect: true },
      direction: { type: String, default: null },
      expanded: { type: Boolean, default: false, reflect: true }
    };
  }

  static get styles() {
    return styles;
  }

  // Constructor

  constructor() {
    super();
    this.current = false;
    this.expanded = false;
    this.handleToggleClick = this.handleToggleClick.bind(this);
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  // Lifecycle methods

  updated(changedProperties) {
    super.updated(changedProperties);
    this.getNavigation().setTabIndexes();
  }

  // Event handlers

  handleContentLoaded(evt) {
    if (this.hasNavigation()) {
      this.getNavigation().addEventListener('viewChange', this.handleNavigationViewChange.bind(this));
    }
    //document.addEventListener('keydown', this.handleKeyDown.bind(this));
    //document.addEventListener('focusin', this.handleFocusChange.bind(this), false);
  }

  handleNavigationViewChange(evt) {
  }

  handleToggleClick(evt) {
    evt.stopPropagation();
    this.toggle();
  }

  // Object methods

  collapse() {
    this.shadowRoot.querySelector('#container').className = 'collapsed';
    this.expanded = false;
    this.getNavigation().setCurrentSection(this.getParentSection());
  }

  getNavigation() {
    return this.closest('il-nav');
  }

  getLinks() {
    const links = [...this.querySelectorAll('a:not([slot="label"])')];
    return links.filter(l => l.closest('il-nav-section') === this);
  }

  getParentSection() {
    return this.parentElement.closest('il-nav-section');
  }

  getToggle() {
    return this.shadowRoot.querySelector('button');
  }

  hasLabelLink() {

  }

  expand() {
    this.getNavigation().collapseAllSectionsExcept(this);
    this.getNavigation().setCurrentSection(this);
    this.shadowRoot.querySelector('#container').className = 'expanded';
    this.getToggle().focus();
    this.expanded = true;
  }

  hasAvailableSpace() {
    return this.getAvailableSpace() >= this.getContentWidth();
  }

  hasNavigation() {
    return !!this.getNavigation();
  }

  isExpanded() {
    return this.expanded;
  }

  isTopLevel() {
    return !this.getParentSection();
  }

  isVisible() {
    return this.isTopLevel() || this.getParentSection().expanded;
  }

  positionSelf() {
    if (!this.hasAvailableSpace() && this.hasAvailableSpaceInOppositeDirection()) {
      this.reverseDirection();
    }
    this.positionChildren();
  }

  setTabIndex(tabindex) {
    console.debug(tabindex);
    this.getToggle().setAttribute('tabindex', tabindex);
  }

  toggle() {
    this.expanded ? this.collapse() : this.expand();
  }

  // Rendering

  renderChevron() {
    return html`
      <svg aria-label="Toggle menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    `;
  }

  renderContents() {
    return html`<div class="contents" id="contents">
      <slot></slot>
    </div>`;
  }

  renderHeading() {
    return html`<div class="heading">
      <div class="label">
        <slot name="label"></slot>
      </div>
      ${this.renderToggle()}
    </div>`;
  }

  renderToggle() {
    const ariaExpanded = this.expanded ? 'true' : 'false';
    return html`<button class="toggle" aria-controls="contents" aria-expanded=${ariaExpanded} @click=${this.handleToggleClick}>
      <span class="indicator">${this.renderChevron()}</span>
    </button>`;
  }

  render() {
    return html`
        <div id="container" class="section ${this.expanded ? 'expanded' : 'collapsed'}">
          ${this.renderHeading()}
          ${this.renderContents()}
        </div>`
  }
}

customElements.define('il-nav-section', NavigationSection);
