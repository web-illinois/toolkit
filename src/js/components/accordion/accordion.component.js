import { LitElement, html } from 'lit';
import styles from './accordion.css';

class Accordion extends LitElement {

  static get properties() {
    return {
      single: {type: Boolean, default: false, attribute: true, reflect: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    if (typeof this.single == 'undefined') {
      this.single = false;
    }
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  handleContentLoaded(evt) {
    this.getPanels().forEach(section => {
        console.log('test');
        section.addEventListener('expand', this.collapsePanels.bind(this));
      });
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
    return this.querySelectorAll('il-accordion-panel');
  }

  firstUpdated() {
  }


  render() {
    return html`
        <slot></slot>
    `;
  }
}

customElements.define('il-accordion', Accordion);