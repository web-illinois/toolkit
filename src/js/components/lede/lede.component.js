import { LitElement, html } from 'lit';
import styles from './lede.css';

class Lede extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`<p class="il-lede"><slot></slot></p>
      `;
  }
}

customElements.define('il-lede', Lede);
