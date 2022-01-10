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
  <div class="content">
    <slot></slot>
  </div>
</section>
    `;
  }
}

customElements.define('il-section', SectionComponent);
