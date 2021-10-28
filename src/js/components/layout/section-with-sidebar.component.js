import { LitElement, html, css } from 'lit';
import styles from './section-with-sidebar.css';

class SectionWithSidebarComponent extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    return html`
<section>
  <slot name="sidebar"></slot>
  <slot></slot>
</section>
    `;
  }
}

customElements.define('il-section-with-sidebar', SectionWithSidebarComponent);
