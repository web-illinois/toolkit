import { LitElement, html, css } from 'lit';
import Pagination from './pagination';

class PaginationComponent extends LitElement {

  static get properties() {
    return {
      page: { type: Number, attribute: true, default: 1 },
      pages: { type: Number, attribute: true, default: 1 },
      param: { type: String, attribute: true, default: 'page' },
      url: { attribute: false }
    };
  }

  constructor() {
    super();
    this.page = 1;
    this.pages = 1;
    this.param = 'page';
    this.url = location.href;
  }

  getPages() {
    const nav = new Pagination.Navigation(this.url, { [this.param]: this.page });
    const pages = [];
    for (let page = 1; page <= this.pages; page++) {
      pages.push({ label: page, url: nav.getPageUrl(page) });
    }
    return pages;
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
