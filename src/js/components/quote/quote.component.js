import { LitElement, html } from 'lit';
import styles from './quote.css';

class Quote extends LitElement {

  static get properties() {
    return {
        pullquote: {type: Boolean, default: false, attribute: true},
      };
  }

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
    return html`
      <div class="quote">
          <p class="il-quote"><slot></slot></p>
          <slot name="attributed"></slot>
          <slot name="secondary"></slot>
      </div>
      `;
  }
}

customElements.define('il-quote', Quote);
