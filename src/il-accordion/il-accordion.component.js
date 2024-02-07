import {html, css, LitElement} from 'lit';
import './il-accordion.css';

export class Accordion extends LitElement {
  constructor() {
    super();
    if (this.hasAttribute('data-il-behavior') && this.getAttribute('data-il-behavior') == 'single') {
      this.addEventListener('expand', (e) => this.collapseOtherPanels(e.target));
    }
  }

  collapseOtherPanels(openedPanel) {
    this.getPanels().forEach(panel => { if (panel != openedPanel) this.collapsePanel(panel); });
  }

  collapsePanel(panel) {
    panel.collapse();
  }

  getPanels() {
    return this.querySelectorAll('il-panel');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('il-accordion', Accordion);