import {LitElement, html, css} from "lit";
import styles from "./il-hero.styles";
import {PatternComponent} from "../il-pattern/il-pattern";
import "./il-hero.css";

export class HeroComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div class="hero">
        <div class="background layer" role="presentation" aria-hidden="true">
          <slot name="background"></slot>
        </div>
        <div class="patterns layer" role="presentation" aria-hidden="true">
          <il-pattern type="ascend" class="ascend pattern"></il-pattern>
          <il-pattern type="finial" class="finial pattern"></il-pattern>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>`
  }
}

customElements.define('il-hero', HeroComponent);