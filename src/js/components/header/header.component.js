import {LitElement, html, css} from 'lit';
import styles from './header.css';
import blockI from './block-i.html';
import uiucWordmark from './wordmark-uiuc.html';
import '../unit-wordmark/unit-wordmark.component';

class Header extends LitElement {
  static get properties() {
    return {
      compact: {type: String, attribute: true},
      full: {type: String, attribute: true},
      view: {type: String, default: 'full', attribute: true, reflect: true},
      hasMenu: {type: Boolean, attribute: false},
      menuVisible: {type: Boolean, attribute: false}
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.view = this.determineView();
    this.menuVisible = false;
    window.addEventListener('resize', this.handleWindowResize.bind(this));
    window.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
    document.addEventListener('click', this.handleDocumentClick.bind(this));
    this.handleWindowResize();
  }

  get view() {
    return this._view;
  }

  set view(newView) {
    const oldView = this._view;
    if (oldView !== newView) {
      this._view = newView;
      this.requestUpdate('view', oldView);
      this.updateComplete.then(() => {
        const evt = new CustomEvent('viewChange', {detail: newView});
        this.dispatchEvent(evt);
      });
    }
  }

  determineView() {
    let isCompact = false;
    if (this.compact) {
      isCompact = window.matchMedia(this.compact).matches;
    } else if (this.full) {
      isCompact = !window.matchMedia(this.full).matches;
    } else {
      isCompact = window.matchMedia('(max-width: 992px)').matches;
    }
    return isCompact ? 'compact' : 'full';
  }

  hasLinks() {
    return !!this.querySelector('[slot="links"]');
  }

  hasNavigation() {
    return !!this.querySelector('[slot="navigation"]');
  }

  hasSearch() {
    return !!this.querySelector('[slot="search"]');
  }

  isCompactView() {
    return this.view === 'compact';
  }

  isFullView() {
    return this.view === 'full';
  }

  // Event handlers

  handleContentLoaded(evt) {
    this.view = this.determineView();
    this.hasMenu = this.hasLinks() || this.hasNavigation() || this.hasSearch();
  }

  handleDocumentClick(evt) {
    if (this.isCompactView() && this.menuVisible) {
      if (this.shadowRoot.querySelector('#menu').contains(evt.target)) {
        return;
      }
      if (this.querySelector('[slot="search"]').contains(evt.target)) {
        return;
      }
      if (this.querySelector('[slot="navigation"]').contains(evt.target)) {
        return;
      }
      if (this.querySelector('[slot="links"]').contains(evt.target)) {
        return;
      }
      this.menuVisible = false;
    }
  }

  handleMenuButtonClick(evt) {
    evt.stopPropagation();
    this.menuVisible = !this.menuVisible;
  }

  handleWindowResize(evt) {
    this.view = this.determineView();
  }

  // Rendering

  renderCampusWordmark() {
    return html`<a href="https://illinois.edu">${uiucWordmark}</a>`;
  }

  renderCompactView() {
    return html`
      <div
          class="header header--compact header--${this.hasMenu ? 'has-menu' : 'no-menu'} ${this.menuVisible ? 'header--menu-visible' : ''}">
        <div class="header__main">
          <div class="campus">
            ${this.renderCampusWordmark()}
          </div>
          <div class="wordmark">
            <slot name="wordmark"></slot>
          </div>
          <div class="menu-button">${this.renderMenuButton()}</div>
        </div>
      </div>
    `;
  }

  renderMenuToggle() {
    const expanded = this.menuVisible ? 'true' : 'false';
    return html`
      <button class="menu-toggle" aria-controls="menu" aria-expanded=${expanded} @click=${this.handleMenuButtonClick}>
        <span class="menu-toggle-inner">
          ${this.renderMenuIcon()}
          ${this.renderCloseIcon()}
          <span class="menu-toggle-label">Menu</span>
        </span>
      </button>
    `;
  }

  renderCloseIcon() {
    return html`
      <svg class="menu-close" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
        <path
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
      </svg>`;
  }

  renderMenuIcon() {
    return html`
      <svg class="menu-icon" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26">
        <path
            d="M4.81 13h41.64a4.81 4.81 0 000-9.62H4.81a4.81 4.81 0 000 9.62zM46.45 21.27H4.81a4.81 4.81 0 000 9.62h41.64a4.81 4.81 0 000-9.62zM46.45 39.13H4.81a4.81 4.81 0 000 9.62h41.64a4.81 4.81 0 000-9.62z"/>
      </svg>`;
  }

  renderIdentity() {
    return html`<div class="identity">
      <slot></slot>
      <slot name="identity"></slot>
      <slot name="wordmark"></slot>
    </div>`;
  }

  renderLinks() {
    return html`
      <div class="links">
        <slot name="links"></slot>
      </div>`;
  }

  renderSearch() {
    return html`<div class="search">
      <slot name="search"></slot>
    </div>`;
  }

  renderNavigation() {
    return html`<div class="navigation">
      <div class="navigation-content">
        <slot name="navigation"></slot>
      </div>
    </div>`;
  }

  renderMenu() {
    return html`<div id="menu" class="menu">
      ${this.renderSearch()}
      ${this.renderNavigation()}
      ${this.renderLinks()}
    </div>
    `;
  }

  render() {
    const viewState = 'view-' + this.view;
    const menuState = this.menuVisible ? 'menu-visible' : 'menu-hidden';
    return html`
      <div class="header ${viewState} ${menuState}">
        <div class="fingerprint"></div>
        <div class="content">
          <div class="top-content">
            <a href="https://www.illinois.edu/" class="campus-wordmark">
              <div class="block-i-container">${blockI}</div>
              <div class="wordmark-container">${uiucWordmark}</div>
            </a>
            ${this.isFullView() ? this.renderLinks() : null}
          </div>
          <div class="bottom-content">
            ${this.renderIdentity()}
            ${this.isFullView() ? this.renderSearch() : this.renderMenuToggle()}
          </div>
        </div>
        ${this.isFullView() ? this.renderNavigation() : this.renderMenu()}
      </div>
    `;
  }
}

customElements.define('il-header', Header);
