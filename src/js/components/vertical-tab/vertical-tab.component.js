import { LitElement, html } from 'lit';
import styles from './vertical-tab.css';

class VerticalTab extends LitElement {

  static get properties() {
    return {
      single: {type: Boolean, default: false, attribute: true, reflect: true},
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
    if (typeof this.single == 'undefined') {
      this.single = false;
    }
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
    if (this.single) {
        this.getPanels().forEach(section => {
            if (evt.target.panelId !== section.panelId) {
                section.removeAttribute('open');
            }
        });
    }
  }

  getPanels() {
    return this.querySelectorAll('il-vertical-tab-panel');
  }

  triggerExpandChild(evt) {
    let panelId = evt.target.getAttribute('aria-controls');
    this.getPanels().forEach(section => {
        if (panelId !== section.panelId) {
            section.removeAttribute('open');
        } else {
          section.setAttribute('open', true);
        }
    });
    this.renderRoot.querySelectorAll('button').forEach(button => { button.setAttribute('aria-expanded', false); });
    evt.target.setAttribute('aria-expanded', true);
  }

  printHeaders() {
    return html`
    <ul>
    ${this.titles.map((title, i) =>
      html`<li><button aria-expanded="${i == 0 ? 'true' : 'false'}" aria-controls="${this.ids[i]}" @click=${this.triggerExpandChild}>${title}</button></li>`
    )}
  </ul>`;
  }

  render() {
    return html`
    <div class="full">
      <div class="title"><slot name="title"></slot></div>
      <div class="headings">${this.printHeaders()}
      </div>
      <div class="information">
      <slot></slot>
      </div>
    </div>
    `;
  }
}

customElements.define('il-vertical-tab', VerticalTab);