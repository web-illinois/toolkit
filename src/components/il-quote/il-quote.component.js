import {LitElement, html, css} from 'lit';
import styles from "./il-quote.styles";
import "./il-quote.css";

class Quote extends LitElement {

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <blockquote id="quote">
        <div id="content"><slot></slot></div>
        <div id="author"><slot name="author"></slot></div>
        <div id="source"><slot name="source"></slot></div>
      </blockquote>
    `;
  }
}

customElements.define('il-quote', Quote);
