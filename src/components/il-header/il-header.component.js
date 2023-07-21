import {LitElement, html} from 'lit';
import "../il-block-i/il-block-il.component";
import styles from './il-header.styles';
import './il-header.css';

class Header extends LitElement {

    static get properties() {
        return {
            _collapsed: { type: Boolean, state: true }
        }
    }

  static get properties() {
    return {
      compact: { type: Boolean, default: false, reflect: true },
      _collapsed: { type: Boolean, state: true }
    }
  }

    constructor() {
        super();
        this.collapseBreakpoint = 990;
        this._collapsed = false;
        this.menuVisible = false;
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
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

    renderCollapsed() {
        return html`
            <div id="header">
                <div id="top-stripe" aria-hidden="true"></div>
                <div id="wordmark">
                    <a href="https://illinois.edu/">University of Illinois Urbana-Champaign</a>
                </div>
                <div id="identity">
                    <slot></slot>
                </div>
                <div id="menu">
                    <button id="menu-toggle" @click=${this.handleToggleClick}>
                        <span>Menu</span>
                        <span class="menu-icon-bar menu-icon-bar--top"></span>
                        <span class="menu-icon-bar menu-icon-bar--middle"></span>
                        <span class="menu-icon-bar menu-icon-bar--bottom"></span>
                    </button>
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
                        <div id="wordmark-and-links">
                            <div id="wordmark">
                                <a href="https://illinois.edu/">University of Illinois Urbana-Champaign</a>
                            </div>
                            <div id="links">
                                <slot name="links"></slot>
                            </div>
                        </div>
                        <div id="identity-and-search">
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
