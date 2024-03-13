import {LitElement, html, css} from "lit";
import styles from "./il-hero.styles";
import "./il-hero.css";

export class HeroComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div class="hero">
        <div class="background layer" role="presentation" aria-hidden="true">
          <slot name="background"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>`
  }
}

customElements.define('il-hero', HeroComponent);