import {LitElement, html, css} from 'lit';
import "../il-block-i/il-block-il.component";
import styles from './il-header.styles';
import './il-header.css';

class Header extends LitElement {

  static get properties() {
    return {
      _collapsed: { type: Boolean, state: true }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.collapseBreakpoint = 990;
    this._collapsed = false;
    this.menuVisible = false;
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.listenForResize();
  }

  get collapsed() {
    return this._collapsed;
  }

  getToggle() {
    return this.shadowRoot.querySelector('button');
  }

  handleResize() {
    this._collapsed = this.offsetWidth < this.collapseBreakpoint;
  }

  handleToggleClick() {
    this.toggleMenu();
  }

  isCollapsed() {
    return this._collapsed;
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
    return this.isCollapsed() ? this.renderCollapsed() : this.renderUncollapsed();
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

  renderCollapsed() {
    return html`
      <div id="header" class="collapsed">
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

  renderUncollapsed() {
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





  hasLinks() {
    console.debug(this.querySelector('[slot="links"]'));
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
    return html`<a href="https://illinois.edu"><svg width="362" height="10" xmlns="http://www.w3.org/2000/svg">
      <title>University of Illinois Urbana-Champaign</title>
      <path d="M4.193 9.144c2.388 0 3.804-1.368 3.804-3.84V.6h-1.92v4.632c0 1.596-.684 2.256-1.872 2.256-1.176 0-1.872-.66-1.872-2.256V.6H.389v4.704c0 2.472 1.416 3.84 3.804 3.84zM13.587 9V3.9L17.775 9h1.596V.6h-1.92v5.1L13.275.6h-1.608V9h1.92zm11.47 0V.6h-1.944V9h1.944zm8.134 0L36.827.6h-1.932l-2.592 6-2.556-6h-2.1L31.271 9h1.92zm12.586 0V7.44h-4.572V5.496h3.9V3.984h-3.9V2.16h4.416V.6h-6.348V9h6.504zm5.242 0V6.66h1.788L54.427 9h2.088l-1.884-2.7c1.092-.468 1.728-1.392 1.728-2.652C56.359 1.764 54.955.6 52.711.6h-3.636V9h1.944zm1.584-3.888h-1.584V2.184h1.584c1.188 0 1.788.54 1.788 1.464 0 .912-.6 1.464-1.788 1.464zm9.802 4.032c2.4 0 3.564-1.2 3.564-2.604 0-3.084-4.884-2.016-4.884-3.564 0-.528.444-.96 1.596-.96.744 0 1.548.216 2.328.66l.6-1.476c-.78-.492-1.86-.744-2.916-.744-2.388 0-3.54 1.188-3.54 2.616 0 3.12 4.884 2.04 4.884 3.612 0 .516-.468.9-1.62.9-1.008 0-2.064-.36-2.772-.876l-.66 1.464c.744.576 2.088.972 3.42.972zM70.995 9V.6h-1.944V9h1.944zm7.426 0V2.184h2.688V.6h-7.32v1.584h2.688V9h1.944zm9.358 0V6.024L91.043.6h-1.908l-2.244 3.732L84.647.6h-2.064L85.835 6v3h1.944zm15.044.144c2.64 0 4.596-1.836 4.596-4.344S105.463.456 102.823.456c-2.652 0-4.596 1.848-4.596 4.344 0 2.496 1.944 4.344 4.596 4.344zm0-1.656c-1.5 0-2.628-1.092-2.628-2.688s1.128-2.688 2.628-2.688c1.5 0 2.628 1.092 2.628 2.688s-1.128 2.688-2.628 2.688zM112.577 9V5.94h3.888V4.38h-3.888V2.16h4.404V.6h-6.348V9h1.944zm14.564 0V.6h-1.944V9h1.944zm9.898 0V7.416h-4.212V.6h-1.944V9h6.156zm8.998 0V7.416h-4.212V.6h-1.944V9h6.156zm4.786 0V.6h-1.944V9h1.944zm5.662 0V3.9l4.188 5.1h1.596V.6h-1.92v5.1L156.173.6h-1.608V9h1.92zm13.594.144c2.64 0 4.596-1.836 4.596-4.344S172.719.456 170.079.456c-2.652 0-4.596 1.848-4.596 4.344 0 2.496 1.944 4.344 4.596 4.344zm0-1.656c-1.5 0-2.628-1.092-2.628-2.688s1.128-2.688 2.628-2.688c1.5 0 2.628 1.092 2.628 2.688s-1.128 2.688-2.628 2.688zM179.833 9V.6h-1.944V9h1.944zm6.502.144c2.4 0 3.564-1.2 3.564-2.604 0-3.084-4.884-2.016-4.884-3.564 0-.528.444-.96 1.596-.96.744 0 1.548.216 2.328.66l.6-1.476c-.78-.492-1.86-.744-2.916-.744-2.388 0-3.54 1.188-3.54 2.616 0 3.12 4.884 2.04 4.884 3.612 0 .516-.468.9-1.62.9-1.008 0-2.064-.36-2.772-.876l-.66 1.464c.744.576 2.088.972 3.42.972zm15.524 0c2.388 0 3.804-1.368 3.804-3.84V.6h-1.92v4.632c0 1.596-.684 2.256-1.872 2.256-1.176 0-1.872-.66-1.872-2.256V.6h-1.944v4.704c0 2.472 1.416 3.84 3.804 3.84zM211.277 9V6.66h1.788l1.62 2.34h2.088l-1.884-2.7c1.092-.468 1.728-1.392 1.728-2.652 0-1.884-1.404-3.048-3.648-3.048h-3.636V9h1.944zm1.584-3.888h-1.584V2.184h1.584c1.188 0 1.788.54 1.788 1.464 0 .912-.6 1.464-1.788 1.464zM224.247 9c2.208 0 3.36-.84 3.36-2.292 0-1.056-.6-1.776-1.536-2.076.684-.36 1.116-1.008 1.116-1.848 0-1.308-1.08-2.184-3.18-2.184h-4.104V9h4.344zm-.48-4.956h-1.932v-1.98h1.932c.948 0 1.464.324 1.464.984 0 .66-.516.996-1.464.996zm.336 3.492h-2.268V5.46h2.268c1.008 0 1.548.336 1.548 1.044 0 .72-.54 1.032-1.548 1.032zM231.721 9l.744-1.8h3.9l.744 1.8h2.04L235.393.6h-1.92L229.729 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zM243.695 9V3.9l4.188 5.1h1.596V.6h-1.92v5.1L243.383.6h-1.608V9h1.92zm10.414 0l.744-1.8h3.9l.744 1.8h2.04L257.781.6h-1.92L252.117 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zm8.77.648v-1.5h-3.396v1.5h3.396zm7.426 2.772c1.464 0 2.676-.528 3.468-1.5l-1.248-1.152c-.564.66-1.272.996-2.112.996-1.572 0-2.688-1.104-2.688-2.688s1.116-2.688 2.688-2.688c.84 0 1.548.336 2.112.984l1.248-1.152c-.792-.96-2.004-1.488-3.456-1.488-2.616 0-4.56 1.812-4.56 4.344s1.944 4.344 4.548 4.344zm8.47-.144V5.556h3.816V9h1.944V.6h-1.944v3.312h-3.816V.6h-1.944V9h1.944zm10.39 0l.744-1.8h3.9l.744 1.8h2.04L296.869.6h-1.92L291.205 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zM305.075 9V4.068l2.46 4.044h.876l2.472-4.152.012 5.04h1.824l-.024-8.4h-1.596l-3.096 5.22L304.859.6h-1.608V9h1.824zm13.33 0V6.684h1.692c2.244 0 3.648-1.164 3.648-3.036 0-1.884-1.404-3.048-3.648-3.048h-3.636V9h1.944zm1.584-3.9h-1.584V2.184h1.584c1.188 0 1.788.54 1.788 1.464 0 .912-.6 1.452-1.788 1.452zm7.354 3.9l.744-1.8h3.9l.744 1.8h2.04L331.015.6h-1.92L325.351 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zM339.341 9V.6h-1.944V9h1.944zm7.798.144c1.2 0 2.472-.372 3.396-1.068V4.668h-1.776v2.46c-.492.264-.984.36-1.512.36-1.608 0-2.724-1.116-2.724-2.688 0-1.596 1.116-2.688 2.748-2.688.852 0 1.56.3 2.172.948l1.248-1.152c-.816-.948-2.04-1.452-3.516-1.452-2.676 0-4.62 1.812-4.62 4.344s1.944 4.344 4.584 4.344zM356.005 9V3.9l4.188 5.1h1.596V.6h-1.92v5.1L355.693.6h-1.608V9h1.92z"/>
    </svg></a>`;
  }

  renderCompactView() {
    return html`
      <div class="header header--compact header--${this.hasMenu ? 'has-menu': 'no-menu'} ${this.menuVisible ? 'header--menu-visible' : ''}">
        <div class="header__main">
          <div class="campus">
            ${this.renderCampusWordmark()}
          </div>
          <div class="identity">
            <slot></slot>
          </div>
          <div class="menu-button">${this.renderMenuButton()}</div>
        </div>
        <div id="menu" class="menu">
          <div class="search">
            <slot name="search"></slot>
          </div>
          <div class="navigation">
            <slot name="navigation"></slot>
          </div>
          <div class="links">
            <slot name="links"></slot>
          </div>
        </div>
      </div>
    `;
  }

  renderFullView() {
    return html`
      <div class="header header--full">
        <div class="header__main-outer">
          <div class="header__main-inner">
            <div class="campus">
              ${this.renderCampusWordmark()}
            </div>
            <div class="wordmark">
              <slot name="wordmark"></slot>
            </div>
            <div class="links">
              <slot name="links"></slot>
            </div>
            <div class="search">
              <slot name="search"></slot>
            </div>
          </div>
        </div>
        <div class="navigation">
          <div class="navigation__inner">
            <slot name="navigation"></slot>
          </div>
        </div>
      </div>
    `;
  }

  _render() {
    return this.isFullView() ? this.renderFullView() : this.renderCompactView();
  }
}

customElements.define('il-header', Header);
