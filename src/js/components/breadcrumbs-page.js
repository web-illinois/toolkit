import {LitElement, html} from 'lit-element';
import styles from './breadcrumbs-page.css';

class BreadcrumbsPage extends LitElement {

  static get properties() {
    return {
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

  renderLabel() {
    return html`<slot></slot>`;
  }

  renderLink() {
    return html`<a href=${this.href}>${this.renderLabel()}</a>`;
  }

  render() {
    return html`<li>
      ${this.renderLink()}
    </li>`;
  }
}

customElements.define('il-breadcrumbs-page', BreadcrumbsPage);
