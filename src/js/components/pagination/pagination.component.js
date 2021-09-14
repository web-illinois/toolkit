import { LitElement, html, css } from 'lit';
import Pagination from './pagination';

class PaginationComponent extends LitElement {

  static get properties() {
    return {
      page: { type: Number, attribute: true, default: 1 },
      pages: { type: Number, attribute: true, default: 1 },
      url: { attribute: false }
    };
  }

  constructor() {
    super();
    this.page = 1;
    this.pages = 1;
    this.param = 'page';
    this.url = '';
  }

  getPageUrl(page) {
    return typeof this.url === 'function' ? this.url(page) : this.makeUrl(page);
  }

  getPages() {
    const pages = [];
    for (let page = 1; page <= this.pages; page++) {
      pages.push({ label: page, url: this.getPageUrl(page) });
    }
    return pages;
  }

  getUrlBase() {
    return this.url ? this.url : location.href;
  }

  getUrlParams(page) {
    return { [this.param]: page };
  }

  makeUrl(page) {
    return new PageUrl(this.getUrlBase(), this.getUrlParams(page)).toString();
  }

  renderPage(page) {
    return html`<li><a href="${page.url}">${page.label}</a></li>`;
  }

  render() {
    return html`
<nav>
  <slot>
    <ul>
      ${this.getPages().map(page => this.renderPage(page))}
    </ul>
  </slot>
</nav>
    `;
  }
}

customElements.define('il-pagination', PaginationComponent);
