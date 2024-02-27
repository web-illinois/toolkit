import {LitElement, html} from "lit";
import styles from './il-call-to-action.styles'
import './il-call-to-action.css'

export class CallToActionComponent extends LitElement {
  static properties = {
    icon: {type: String}
  }

  static styles = styles;

  constructor() {
    super();
    this.icon = null;
  }

  renderIcon() {
    const icon = this.icon;
    if (!icon) return null;
    return html`
      <div class="icons">
        <img class="white icon" src="https://cdn.brand.illinois.edu/icons/line/white/${icon}.svg" alt="" aria-hidden="true">
        <img class="blue icon" src="https://cdn.brand.illinois.edu/icons/line/blue/${icon}.svg" alt="" aria-hidden="true">
        <img class="orange icon" src="https://cdn.brand.illinois.edu/icons/line/orange/${icon}.svg" alt="" aria-hidden="true">
      </div>`
  }

  render() {
    return html`
      <div class="call-to-action">
        <div class="call">
          ${this.renderIcon()}
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <div class="action">
          <slot name="action"></slot>
        </div>
      </div>`
  }
}

customElements.define('il-call-to-action', CallToActionComponent);