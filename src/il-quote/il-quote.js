import {LitElement, html} from "lit";
import styles from './il-quote.styles'

export class QuoteComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div class="quote">
        <div class="quotation-marks" role="presentation" aria-hidden="true">&ldquo;</div>
        <blockquote>
          <slot></slot>
        </blockquote>
        <div class="attribution">
          <slot name="attribution"></slot>
        </div>
        <hr>
      </div>`
  }
}

customElements.define('il-quote', QuoteComponent);