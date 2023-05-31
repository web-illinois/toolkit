import { LitElement, html } from 'lit';
import styles from './il-page.styles';
import "./il-page.css";
import "../../css/base.css";

class PageComponent extends LitElement {

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    const observer = new ResizeObserver(this.handleResize.bind(this));
    observer.observe(this);
  }

  handleResize(entries) {
    this.updateSize();
  }

  getSize() {
    const width = this.offsetWidth;
    switch (true) {

      // FULL: there is enough room for components to display at full size
      case width >= 1200:
        return 'full';

      // TABLET: components should adjust to a somewhat reduced screen size
      case width >= 768:
        return 'tablet';

      // PHONE: component should adjust to a significantly reduced screen size
      default:
        return 'phone';
    }
  }

  updateSize() {
    this.setAttribute('data-il-page-size', this.getSize());
  }

  render() {
    return html`
      <article id="page">
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
