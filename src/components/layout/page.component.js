import { LitElement, html } from 'lit';
import ResponsiveLayout from './responsive-layout';
import styles from './page.css';
import "../../css/styles.scss";

class PageComponent extends ResponsiveLayout {

  static get modes() {
    return [
      { name: 'full', match: '(min-width: 992px)' },
      { name: 'compact' }
    ]
  }

  static get properties() {
    return super.properties;
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    const mode = this.mode;
    return html`
<article class="page page-${mode}">
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
