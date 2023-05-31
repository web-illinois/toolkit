import {LitElement, html, css} from 'lit';
import "./il-quote.css";

class Quote extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <div id="quote">
        <div id="content">
          <slot></slot>
        </div>
        <div id="attribution">
          <slot name="attribution"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('il-quote', Quote);
