import { LitElement, html, css } from 'lit';
import Pagination from './pagination';
import styles from './pagination.css';

class PaginationComponent extends LitElement {

  static get properties() {
    return {
      page: { type: Number, attribute: true, default: 1 },
      pages: { type: Number, attribute: true, default: 1 },
      param: { type: String, attribute: true, default: 'page' },
      url: { attribute: false }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.page = 1;
    this.pages = 1;
    this.param = 'page';
    this.url = location.href;
  }

  getNavItems() {
    const nav = new Pagination.Navigation(this.url, this.pages, this.param);
    nav.currentPage = this.page;
    return nav.items;
  }

  renderNavItem(item) {
    switch (item.constructor) {
      case (Pagination.FirstPageLink):
        return html`<li class="first"><a href="${item.url}" aria-label="First page">First</a></li>`;
      case (Pagination.PreviousPageLink):
        return html`<li class="previous"><a href="${item.url}" aria-label="Previous page">Previous</a></li>`;
      case (Pagination.NextPageLink):
        return html`<li class="next"><a href="${item.url}" aria-label="Next page">Next</a></li>`;
      case (Pagination.LastPageLink):
        return html`<li class="last"><a href="${item.url}" aria-label="Last page">Last</a></li>`;
      case (Pagination.CurrentPage):
        return html`<li class="current" aria-current="page">${item.pageNumber}</li>`;
      case (Pagination.PageLink):
        return html`<li><a href="${item.url}" aria-label="Page ${item.pageNumber}">${item.pageNumber}</a></li>`;
    }
  }

  render() {
    return html`
<nav aria-label="Pagination">
  <slot>
    <ul>
      ${this.getNavItems().map(item => this.renderNavItem(item))}
    </ul>
  </slot>
</nav>
    `;
  }
}

customElements.define('il-pagination', PaginationComponent);
