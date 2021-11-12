import {LitElement, html} from 'lit';
import styles from './breadcrumbs-page.css';

class BreadcrumbsPage extends LitElement {

  static get properties() {
    return {
      current: {type: Boolean, attribute: true},
      href: {type: String, attribute: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.href = "";
  }

  hasLink() {
    return !!this.href;
  }

  isCurrentPage() {
    return this.current !== undefined;
  }

  renderChevron() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
    </svg>`;
  }

  renderLabel() {
    return html`<slot></slot>`;
  }

  renderLink() {
    if (this.isCurrentPage()) {
      return html`<a href=${this.href} aria-current="page">${this.renderLabel()}</a>`;
    }
    else {
      return html`<a href=${this.href}>${this.renderLabel()}</a>`;
    }
  }

  render() {
    return html`<li class=${this.isCurrentPage() ? 'current': ''}>
      ${this.hasLink() ? this.renderLink() : this.renderLabel()}
      <span class="separator" aria-hidden="true">${this.renderChevron()}</span>
    </li>`;
  }
}

customElements.define('il-breadcrumbs-page', BreadcrumbsPage);
