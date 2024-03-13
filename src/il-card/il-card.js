import {LitElement, css, html} from "lit";
import styles from "./il-card.styles";
import "./il-card.css";

export class CardComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <article>
        <div class="content">
          <div class="container">
            <slot></slot>
          </div>
        </div>
      </article>`
  }
}

customElements.define('il-card', CardComponent);