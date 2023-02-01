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
    this.titles.length = 0;
    this.ids.length = 0;
    this.getPanels().forEach(section => {
        this.titles.push(section.headerTitle); 
        this.ids.push(section.panelId); 
        section.addEventListener('expand', this.collapsePanels.bind(this));
        section.addEventListener('changeheader', this.refreshPanels.bind(this));
        if (this.titles.length == 1) {
          section.setAttribute('open', true);
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

  refreshPanels(evt) {
    this.requestUpdate();
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
    this.handleContentLoaded(this);
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