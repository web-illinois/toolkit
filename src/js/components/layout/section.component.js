import { LitElement, html, css } from 'lit';
import styles from './section.css';

class SectionComponent extends LitElement {

  static get properties() {
    return {
      width: { type: String, attribute: true, default: 'fixed', reflect: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.width = 'fixed';
  }

  render() {
    const width = `${this.width}-width`;
    return html`
<section class=${width}>
  <slot></slot>
</section>
    `;
  }
}

customElements.define('il-section', SectionComponent);
