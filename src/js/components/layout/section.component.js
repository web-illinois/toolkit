import { LitElement, html, css } from 'lit';
import styles from './section.css';

class SectionComponent extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    return html`
<section>
  <slot></slot>
</section>
    `;
  }
}

customElements.define('il-section', SectionComponent);
