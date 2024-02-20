import {LitElement, html} from "lit";
import styles from './il-header.styles';

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
  }

  connectedCallback() {
    super.connectedCallback();
    this.getPage().addEventListener('resize', this.handlePageResize);
    this.setAttribute('data-menu-expanded', this.menuExpanded ? 'true' : 'false');
    if (this.getAttribute('data-compact') === 'true') this.compact = true;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.page.removeEventListener('resize', this.handlePageResize);
    this.page = undefined;
  }

  adjustToPageSize() {
    const compact = this.getPage().getSizeInColumns() < 8;
    this.compact = compact;
    this.setAttribute('data-compact', compact ? 'true' : 'false');
  }

  collapseMenu() {

  }

  expandMenu() {

  }

  getPage() {
    return this.closest('il-page');
  }

  handleMenuButtonClick() {
    this.menuExpanded = !this.menuExpanded;
  }

  handlePageResize(evt) {
    this.adjustToPageSize();
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
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0952 7.0769H1.90476C0.852791 7.0769 0 7.97233 0 9.0769C0 10.1815 0.852791 11.0769 1.90476 11.0769H18.0952C19.1472 11.0769 20 10.1815 20 9.0769C20 7.97233 19.1472 7.0769 18.0952 7.0769Z"/>
            <path d="M18.0952 14.0769H1.90476C0.852791 14.0769 0 14.9723 0 16.0769C0 17.1815 0.852791 18.0769 1.90476 18.0769H18.0952C19.1472 18.0769 20 17.1815 20 16.0769C20 14.9723 19.1472 14.0769 18.0952 14.0769Z"/>
            <path d="M18.0952 0.0769043H1.90476C0.852791 0.0769043 0 0.972335 0 2.0769C0 3.18147 0.852791 4.0769 1.90476 4.0769H18.0952C19.1472 4.0769 20 3.18147 20 2.0769C20 0.972335 19.1472 0.0769043 18.0952 0.0769043Z"/>
          </svg>
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
    return html`
      <div class="header">
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