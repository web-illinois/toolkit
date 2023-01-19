import { LitElement, html } from 'lit';
import styles from './vertical-tab.css';

class VerticalTab extends LitElement {

  static get properties() {
    return {
      titles: {type: Array, attribute: false },
      ids: {type: Array, attribute: false }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.titles = [];
    this.ids = [];
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  handleContentLoaded(evt) {
    let firstItem = true;
    this.getPanels().forEach(section => {
        this.titles.push(section.headerTitle); 
        this.ids.push(section.panelId); 
        section.addEventListener('expand', this.collapsePanels.bind(this));
        if (firstItem) {
          section.setAttribute('open', true);
          firstItem = false;
        }
      });
      this.requestUpdate();
  }

  collapsePanels(evt) {
    this.getPanels().forEach(section => {
        if (evt.target.panelId !== section.panelId) {
            section.removeAttribute('open');
        }
    });
  }

  getPanels() {
    return this.querySelectorAll('il-vertical-tab-panel');
  }

  renderChevron() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>`;
  }

  triggerExpandChild(evt) {
    let panelId = evt.target.getAttribute('aria-controls');
    debugger;
    this.getPanels().forEach(section => {
        if (panelId !== section.panelId) {
            section.removeAttribute('open');
        } else {
          section.setAttribute('open', true);
        }
    });
    this.renderRoot.querySelectorAll('button').forEach(button => { button.setAttribute('aria-selected', false); });
    evt.target.setAttribute('aria-selected', true);
  }

  printHeaders() {
    return html`
    <ul>
    ${this.titles.map((title, i) =>
      html`<li><button role="tab" aria-selected="${i == 0 ? 'true' : 'false'}" aria-controls="${this.ids[i]}" @click=${this.triggerExpandChild}>${title}<span>${this.renderChevron()}</span></button></li>`
    )}
  </ul>`;
  }

  render() {
    return html`
    <div class="full">
      <div class="title"><slot name="title"></slot></div>
      <div class="headings" role="tablist">${this.printHeaders()}
      </div>
      <div class="information">
      <slot></slot>
      </div>
    </div>
    `;
  }
}

customElements.define('il-vertical-tab', VerticalTab);