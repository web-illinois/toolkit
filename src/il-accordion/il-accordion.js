import {html, css, LitElement} from 'lit';
import './il-accordion.css';

export class Accordion extends LitElement {
  static get properties() {
    return {
        limit: { }
    };
  }

  set limit(val) {
    this._limit = val;
    if (this.getExpandedPanels().length > 1 && this._limit == "1") {
      this.getExpandedPanels().forEach((panel, i) => { if (i > 0) panel.removeAttribute('data-il-state'); });
    }
  }

  get limit() { return this._limit; }

  constructor() {
    super();
    this._limit == '';
    this.addEventListener('collapse', (e) => this.collapsePanel(e.target));
    this.addEventListener('expand', (e) => this.expandPanelListener(e.target));
  }
  
  expandPanelListener(panel) {
    if (this.limit == "1") {
      this.expandPanelAndCollapseOthers(panel);
    } else {
      panel.expand();
    }
  }
  
  expandPanelAndCollapseOthers(openedPanel) {
    this.getPanels().forEach(panel => { if (panel != openedPanel) this.collapsePanel(panel); else this.expandPanel(panel); });
  }

  expandPanel(panel) {
    panel.expand();
  }

  collapsePanel(panel) {
    panel.collapse();
  }

  getPanels() {
    return this.querySelectorAll('il-accordion-section');
  }

  getExpandedPanels() {
    return this.querySelectorAll('il-accordion-section[data-il-state="expanded"]');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('il-accordion', Accordion);