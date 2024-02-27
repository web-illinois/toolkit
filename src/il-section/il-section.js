import {LitElement, html} from "lit";
import styles from "./il-section.styles";
import './il-section.css'

export class SectionComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <section>
        <slot></slot>
      </section>`
  }
}

customElements.define('il-section', SectionComponent);