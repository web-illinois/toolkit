import {LitElement, html} from 'lit';
import styles from './il-accordion.styles';
import './il-accordion.css';

class Accordion extends LitElement {

  static get properties() {
    return {
      single: {type: Boolean, default: false }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.single = false;
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  handleContentLoaded(evt) {
    this.getPanels().forEach(section => {
      section.addEventListener('toggle', this.handlePanelToggle.bind(this));
    });
  }

  handlePanelToggle(evt) {
    const panel = evt.target;
    const expanded = this.panelIsExpanded(panel);
    if (this.single) this.collapseAllPanels();
    expanded ? this.collapsePanel(panel) : this.expandPanel(panel);
  }

  collapseAllPanels() {
    this.getPanels().forEach(panel => this.collapsePanel(panel));
  }

  collapsePanel(panel) {
    panel.collapse();
    panel.setAttribute('data-il-state', 'collapsed');
  }

  getPanels() {
    return this.querySelectorAll('il-accordion-panel');
  }

  expandPanel(panel) {
    panel.expand();
    panel.setAttribute('data-il-state', 'expanded');
  }

  panelIsExpanded(panel) {
    return panel.getAttribute('data-il-state', 'collapsed') === 'expanded';
  }

  render() {
    return html`
        <slot></slot>
    `;
  }
}

customElements.define('il-accordion', Accordion);