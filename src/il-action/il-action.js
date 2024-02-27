import {LitElement, html} from "lit";
import styles from './il-action.styles';
import './il-action.css';

export class ActionComponent extends LitElement {
  static properties = {
    href: {type: String},
    type: {type: String}
  }

  static styles = styles;

  render() {
    return html`<a href="${this.href}" class="${this.type}">
      <slot></slot>
    </a>`
  }
}

customElements.define('il-action', ActionComponent);