import {LitElement, html} from 'lit';
import "../il-block-i/il-block-il.component";
import styles from './il-header.styles';
import './il-header.css';

class Header extends LitElement {

  static get properties() {
    return {
      compact: { type: Boolean, default: false, reflect: true },
      _collapsed: { type: Boolean, state: true }
    }
  }

  static get styles() {
    return styles;
  }

  // Lifecycle

  constructor() {
    super();
    this.collapseBreakpoint = 990;
    this.compact = false;
    this._collapsed = false;
    this.menuVisible = false;
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.listenForResize();
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (_changedProperties.has('compact')) {
      this.dispatchEvent(new CustomEvent('compact', {detail: { compact: this.compact }}));
    }
  }

  // Getters/setters

  get collapsed() {
    return this._collapsed;
  }

  getToggle() {
    return this.shadowRoot.querySelector('button');
  }

  handleResize() {
    this.compact = !this.hasSpaceForFullSize();
  }

  handleToggleClick() {
    this.toggleMenu();
  }

  hasSpaceForFullSize() {
    return this.offsetWidth >= this.collapseBreakpoint
  }

  isCompact() {
    return this.compact;
  }

  listenForResize() {
    const observer = new ResizeObserver(this.handleResize.bind(this));
    observer.observe(this);
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.updateMenuVisibilityAttribute();
  }

  updateMenuVisibilityAttribute() {
    this.setAttribute('data-il-menu-visible', this.menuVisible ? '1' : '0');
  }

  // Render

  render() {
    return this.isCompact() ? this.renderCompact() : this.renderFull();
  }

  renderBranding() {
    return html`
      <div id="branding">
        <a href="https://illinois.edu/">
          <span id="block-i">
            <il-block-i></il-block-i>
          </span>
          <span id="wordmark">
            University of Illinois Urbana-Champaign
          </span>
        </a>
      </div>`
  }

  renderMenuToggle() {
    return html`<button @click=${this.handleToggleClick}>
      <span class="label">Menu</span>
      <span class="menu-icon-bar menu-icon-bar--top"></span>
      <span class="menu-icon-bar menu-icon-bar--middle"></span>
      <span class="menu-icon-bar menu-icon-bar--bottom"></span>
    </button>`;
  }

  renderCompact() {
    return html`
      <div id="header" class="compact">
        <div id="top-stripe" aria-hidden="true"></div>
        <div id="main">
          <div class="content-container">
            ${this.renderBranding()}
            <div class="row" id="identity-and-menu-toggle">
              <div id="identity">
                <slot></slot>
              </div>
              <div id="menu-toggle">
                ${this.renderMenuToggle()}
              </div>
            </div>
          </div>
        </div>
        <div id="menu">
          <div id="menu-contents">
            <div id="links">
              <slot name="links"></slot>
            </div>
            <div id="search">
              <slot name="search"></slot>
            </div>
            <div id="navigation">
              <slot name="navigation"></slot>
            </div>
          </div>
        </div>
      </div>
    `
  }

  renderFull() {
    return html`
      <div id="header">
        <div id="top-stripe" aria-hidden="true"></div>
        <div id="main">
          <div class="content-container">
            <div class="row" id="branding-and-eyebrow">
              ${this.renderBranding()}
              <div id="eyebrow">
                <slot name="links"></slot>
              </div>
            </div>
            <div class="row" id="identity-and-search">
              <div id="identity">
                <slot></slot>
              </div>
              <div id="search">
                <slot name="search"></slot>
              </div>
            </div>
          </div>
        </div>
        <div id="navigation">
          <div class="content-container">
            <slot name="navigation"></slot>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('il-header', Header);
