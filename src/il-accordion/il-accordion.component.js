import {html, css, LitElement} from 'lit';
import './il-accordion.css';

export class Accordion extends LitElement {
  constructor() {
    super();
    if (this.hasAttribute('data-il-allow-multiple') && this.getAttribute('data-il-allow-multiple') == 'false') {
      this.addEventListener('expand', (e) => this.collapseOtherPanels(e.target));
    } else {
      this.addEventListener('expand', (e) => this.expandPanel(e.target));
    }
    this.addEventListener('collapse', (e) => this.collapsePanel(e.target));
  }
  
  collapseOtherPanels(openedPanel) {
    this.getPanels().forEach(panel => { if (panel != openedPanel) this.collapsePanel(panel); else this.expandPanel(panel); });
  }

  collapsePanel(panel) {
    panel.collapse();
  }

  expandPanel(panel) {
    panel.expand();
  }

  getPanels() {
    return this.querySelectorAll('il-accordion-section');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('il-accordion', Accordion);