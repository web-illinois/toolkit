import {LitElement, html, css} from 'lit';
import styles from "./il-quote.styles";
import "./il-quote.css";

class Quote extends LitElement {

  static get styles() {
    return styles;
  }

  render() {
    let includeQuote = this.classList.contains('il-exclude-marks') ? '' : 'marks';
    return html`
      <blockquote id='quote' class='${includeQuote}'>
        <div id='content'><slot></slot></div>
        <div id='author'><slot name="author"></slot></div>
        <div id='source'><slot name="source"></slot></div>
      </blockquote>
    `;
  }
}

customElements.define('il-quote', Quote);
