import { LitElement, html, css } from 'lit';
import styles from './page.css';

class PageComponent extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    return html`
<article class="page">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
  </article>
    `;
  }
}

customElements.define('il-page', PageComponent);
