import { LitElement, html } from 'lit';
import styles from './il-page.styles';
import "./il-page.css";
import "../../css/base.css";

class PageComponent extends LitElement {

  static get properties() {
    return {
      grid: { type: String }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.grid = null;
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

  renderGridOverlay() {
    return html`<div id="grid" class="overlay">
      <div class="content">
        <div class="content-margin left"></div>
        <div class="content-margin right"></div>
      </div>
    </div>`
  }

  render() {
    const overlay = this.grid ? this.renderGridOverlay() : '';
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
        ${overlay}
      </article>
    `;
  }
}

customElements.define('il-page', PageComponent);
