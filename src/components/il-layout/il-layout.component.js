import { LitElement, html } from 'lit';
import styles from './il-layout.styles';
import "./il-layout.css";
import "../../css/base.css";

class LayoutComponent extends LitElement {

  static get properties() {
    return {
      columns: { type: Number, default: 1 },
      type: { type: String }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.columns = 1;
    this.type = null;
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

  renderPage() {
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

  render() {
    if (this.type === 'page') {
      return this.renderPage();
    }
    return html`
      <div class="grid columns-${this.columns}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('il-layout', LayoutComponent);
