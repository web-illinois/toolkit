import { LitElement, html } from 'lit-element';
import styles from './breadcrumbs.css';

class Breadcrumbs extends LitElement {

  static get properties() {
    return {
      label: {type: String, attribute: true},
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.label = "Breadcrumbs";
  }

  render() {
    return html`<nav aria-label=${this.label} class="breadcrumb">
      <ol>
        <slot></slot>
      </ol>
    </nav>`;
  }
}

customElements.define('il-breadcrumbs', Breadcrumbs);

