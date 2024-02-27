import {LitElement, html} from "lit";
import styles from './il-header.styles';
import './il-header.css';

export class HeaderComponent extends LitElement {
  static properties = {
    compact: { type: Boolean, reflect: true },
    menuExpanded: { type: Boolean, attribute: false}
  }

  static styles = styles;

  constructor() {
    super();
    this.page = undefined;
    this.compact = false;
    this.menuExpanded = false;
    this.handlePageResize = this.handlePageResize.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    document.addEventListener('DOMContentLoaded', this.adjustMenuSize.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.handleWindowResize);
    this.getPage().addEventListener('resize', this.handlePageResize);
    this.setAttribute('data-menu-expanded', this.menuExpanded ? 'true' : 'false');
    if (this.getAttribute('data-compact') === 'true') this.compact = true;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.page.removeEventListener('resize', this.handlePageResize);
    window.removeEventListener('resize', this.handleWindowResize);
    this.page = undefined;
  }

  adjustDropdownPositions() {
    if (this.compact) return;
  }

  adjustMenuSize() {
    if (!this.compact) return;
    const screenHeight = screen.availHeight;
    const menu = this.shadowRoot.querySelector('.menu');
    if (menu) {
      const bounds = menu.getBoundingClientRect();
      console.debug(bounds);
      menu.style.height = screenHeight - bounds.top + 'px';
    }
  }

  adjustToPageSize() {
    const compact = this.getPage().getSizeInColumns() < 8;
    this.compact = compact;
    this.setAttribute('data-compact', compact ? 'true' : 'false');
  }

  collapseMenu() {

  }

  expandMenu() {
    this.adjustMenuSize();
  }

  getPage() {
    return this.closest('il-page');
  }

  handleMenuButtonClick() {
    this.menuExpanded = !this.menuExpanded;
    this.adjustMenuSize();
  }

  handlePageResize(evt) {
    this.adjustToPageSize();
  }

  handleWindowResize(evt) {
    this.compact ? this.adjustMenuSize() : this.adjustDropdownPositions();
  }

  renderBlockI() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 79">
        <path class="outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1z" />
        <path class="fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3z" />
      </svg>`
  }

  renderBranding() {
    return html`
      <div class="branding">
        <a href="https://illinois.edu/">
          <span class="elements">
            <span class="block-i" aria-labelledby="wordmark">
              ${this.renderBlockI()}
            </span>
            <span class="wordmark" id="wordmark">
              University of Illinois Urbana-Champaign
            </span>
          </span>
        </a>
      </div>
    `
  }

  renderFeaturedLinks() {
    return html`
      <div class="featured-links">
        <slot name="links"></slot>
      </div>`
  }

  renderIdentity() {
    return html`
      <div class="identity">
        <div class="primary-unit">
          <slot name="primary-unit"></slot>
        </div>
        <div class="site-name">
          <slot name="site-name"></slot>
        </div>
      </div>`
  }

  renderMenu() {
    return html`
      <div class="menu" id="menu">
        ${this.renderSearch()}
        ${this.renderNavigation()}
        ${this.renderFeaturedLinks()}
      </div>`
  }

  renderMenuToggleButton() {
    const expanded = this.menuExpanded ? 'true' : 'false';
    return html`
      <div class="menu-toggle">
        <button @click=${this.handleMenuButtonClick.bind(this)} aria-controls="menu" aria-expanded="${expanded}">
          <span class="icons" aria-hidden="true">
            <img class="menu-icon icon" src="https://cdn.brand.illinois.edu/icons/solid/white/menu.svg" alt="">
            <img class="exit-icon icon" src="https://cdn.brand.illinois.edu/icons/solid/white/exit.svg" alt="">
          </span>
          <span class="label">Menu</span>
        </button>
      </div>`
  }

  renderNavigation() {
    return html`
      <div class="navigation">
        <slot name="navigation"></slot>
      </div>`
  }

  renderSearch() {
    return html`
      <div class="search">
        <slot name="search"></slot>
      </div>`
  }

  renderTopStripe() {
    return this.compact ? this.renderBranding() : html`${this.renderBranding()} ${this.renderFeaturedLinks()}`;
  }

  renderBottomStripe() {
    return html`${this.renderIdentity()} ${this.compact ? this.renderMenuToggleButton() : this.renderSearch()}`;
  }

  render() {
    const menuExpanded = this.menuExpanded ? 'menu-expanded' : 'menu-collapsed';
    return html`
      <div class="header ${menuExpanded}">
        <div class="top stripe">
          ${this.renderTopStripe()}
        </div>
        <div class="bottom stripe">
          ${this.renderBottomStripe()}
        </div>
        ${this.compact ? this.renderMenu() : this.renderNavigation()}
      </div>`
  }
}

customElements.define('il-header', HeaderComponent);