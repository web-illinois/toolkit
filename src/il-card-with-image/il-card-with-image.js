import {LitElement, css, html} from "lit";
import styles from "./il-card-with-image.styles";
import "./il-card-with-image.css";

export class CardWithImageComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <article>
        <div class="image">
          <slot name="image"></slot>
        </div>
        <div class="content">
          <div class="container">
            <slot></slot>
          </div>
        </div>
      </article>`
  }
}

customElements.define('il-card-with-image', CardWithImageComponent);