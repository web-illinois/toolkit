import {LitElement, html} from 'lit-element';
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
    </li>`;
  }
}

customElements.define('il-breadcrumbs-page', BreadcrumbsPage);
