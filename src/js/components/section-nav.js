import {LitElement, html, css} from 'lit-element';

class SectionNavigation extends LitElement {
  static get properties() {
    return {
      compact: {type: Boolean, attribute: true, default: false, reflect: true},
      expanded: {type: Boolean, attribute: false}
    };
  }

  static get styles() {
    return css`
.header {
  margin: 0;
  padding: 0 20px;
  background-color: #F0F0F0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;        
}
.header h2 {
  margin: 0;
  padding: 0;
  font: 700 22px/56px var(--il-source-sans);
  color: var(--il-blue);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.header h2::after {
  content: "\\2026";
}
.header button {
  position: relative;
  box-sizing: border-box;
  width: 60px;
  height: 44px;
  overflow: hidden;
  margin: 0 0 0 10px;
  padding: 0;
  background: transparent;
  border: 2px solid var(--il-blue);
  color: var(--il-blue);
  border-radius: 3px;
  text-indent: 72px;
  white-space: nowrap;
}
.header button:focus, .header button:hover {
  background-color: var(--il-orange);
  border-color: var(--il-orange);
  color: white;
}
.header button svg {
  position: absolute;
  left: 19px;
  top: 11px;
  width: 18px;
  height: 18px;
  fill: currentColor;
}
nav.full .header {
  position: absolute !important;
  left: -9999px !important;
  top: auto !important;
  display: block !important;
  text-align: left !important;
  text-indent: -9999em !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
}
nav.compact {
  border-radius: 3px;
  border: solid 2px #d8d8d8;
}
nav.compact .menu {
  display: none;
  background-color: white;
}
nav.compact.expanded .header {
  border-bottom: solid 1px #d8d8d8;
}
nav.compact.expanded .header button svg {
  transform: rotate(180deg);
}
nav.compact.expanded .menu {
  display: block;
}
`;
  }

  constructor() {
    super();
    this.compact = false;
    this.expanded = false;
    this.handleToggleClick = this.handleToggleClick.bind(this);
    document.addEventListener('DOMContentLoaded', this.handleDocumentLoaded.bind(this));
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  handleDocumentLoaded(evt) {
    this.handleWindowResize();
  }

  handleToggleClick() {
    this.expanded = !this.expanded;
  }

  handleWindowResize() {
    this.compact = !window.matchMedia("(min-width: 767px)").matches;
  }

  render() {
    const mode = this.compact ? 'compact' : 'full';
    const expanded = this.expanded ? 'expanded': 'collapsed';
    return html`
      <nav class=${mode + ' ' + expanded}>
        <div class="header">
            <h2>In this section</h2>
            <button class="il-section-nav__toggle" @click=${this.handleToggleClick}>
              Toggle section navigation menu
              <svg aria-label="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" role="presentation">
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
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
