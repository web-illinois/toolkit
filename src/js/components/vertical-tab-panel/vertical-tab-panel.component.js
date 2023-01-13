import { LitElement, html } from 'lit';
import styles from './vertical-tab-panel.css';

class VerticalTabPanel extends LitElement {

  static get properties() {
    return {
      headerTitle: { type: String }, 
      headerTagName: { type: String },
      buttonId: { type: String, default: '' },
      panelId: { type: String, default: '' },
      open: {type: Boolean, default: false, attribute: true, reflect: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    if (typeof this.open == 'undefined') {
      this.open = false;
    }
  }

  collapse() {
    this.open = false;
  }

  updateHeader(e) {
    const childNode = e.target.assignedNodes({flatten: true})[0];
    if (typeof childNode !== 'undefined') {
      this.headerTagName = childNode.tagName;
      this.headerTitle = childNode.innerText;
      let id = this.headerTitle.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
      this.id = "il-vertical-tab-id-" + id;
      this.buttonId = "il-vertical-tab-button-" + id;
      this.panelId = "il-vertical-tab-panel-" + id;
    }
  }

  triggerExpand(e) {
    this.open = !this.open;
    this.dispatchEvent(new Event('expand', { panelId: 'testid' }));
  }

  firstUpdated() {
    this.shadowRoot.querySelector('slot[name="header"]').addEventListener('slotchange', (e) => this.updateHeader(e));
  }

  renderChevron() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>`;
  }

  render() {
    if (this.headerTagName == 'H2') {
      return html`
      <div class="vertical-tab-panel">
      <div class="invisible"><slot name="header"></slot></div>
      <h2><button id="${this.buttonId}" aria-expanded="${this.open}" aria-controls="${this.panelId}" @click=${this.triggerExpand}><span>${this.renderChevron()}</span>${this.headerTitle}</button></h2>
          <div role="region" class="panel" id="${this.panelId}" aria-labelledby="${this.buttonId}" ?hidden=${!this.open}>
          <slot></slot>
          </div>
      </div>
      `;
    }
    if (this.headerTagName == 'H3') {
      return html`
      <div class="vertical-tab-panel">
      <div class="invisible"><slot name="header"></slot></div>
      <h3><button id="${this.buttonId}" aria-expanded="${this.open}" aria-controls="${this.panelId}" @click=${this.triggerExpand}><span>${this.renderChevron()}</span>${this.headerTitle}</button></h3>
          <div role="region" class="panel" id="${this.panelId}" aria-labelledby="${this.id}" ?hidden=${!this.open}>
          <slot></slot>
          </div>
      </div>
      `;
    }
    if (this.headerTagName == 'H4') {
      return html`
      <div class="vertical-tab-panel">
      <div class="invisible"><slot name="header"></slot></div>
      <h4><button id="${this.buttonId}" aria-expanded="${this.open}" aria-controls="${this.panelId}" @click=${this.triggerExpand}><span></span>${this.headerTitle}</button></h4>
          <div role="region" class="panel" id="${this.panelId}" aria-labelledby="${this.id}" ?hidden=${!this.open}>
          <slot></slot>
          </div>
      </div>
      `;
    }
    if (this.headerTagName == 'H5') {
      return html`
      <div class="vertical-tab-panel">
      <div class="invisible"><slot name="header"></slot></div>
      <h5><button id="${this.buttonId}" aria-expanded="${this.open}" aria-controls="${this.panelId}" @click=${this.triggerExpand}><span></span>${this.headerTitle}</button></h5>
          <div role="region" class="panel" id="${this.panelId}" aria-labelledby="${this.id}" ?hidden=${!this.open}>
          <slot></slot>
          </div>
      </div>
      `;
    }
    if (this.headerTagName == 'H6') {
      return html`
      <div class="vertical-tab-panel">
      <div class="invisible"><slot name="header"></slot></div>
          <h6><button id="${this.buttonId}" aria-expanded="${this.open}" aria-controls="${this.panelId}" @click=${this.triggerExpand}><span></span>${this.headerTitle}</button></h6>
          <div role="region" class="panel" id="${this.panelId}" aria-labelledby="${this.id}" ?hidden=${!this.open}>
          <slot></slot>
          </div>
      </div>
      `;
    }
    return html`
    <div class="vertical-tab-panel">
    <div class="invisible"><slot name="header"></slot></div>
    <button id="${this.buttonId}" aria-expanded="${this.open}" aria-controls="${this.panelId}" @click=${this.triggerExpand}><span></span>${this.headerTitle}</button>
        <div role="region" class="panel" id="${this.panelId}" aria-labelledby="${this.id}" ?hidden=${!this.open}>
        <slot></slot>
        </div>
    </div>
    `;
  }
}

customElements.define('il-vertical-tab-panel', VerticalTabPanel);