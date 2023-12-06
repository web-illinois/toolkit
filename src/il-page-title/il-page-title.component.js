import { LitElement, html } from 'lit';
import Debugger from '../../js/debug';
import styles from './il-page-title.styles';
import "./il-page-title.css";

class PageTitle extends LitElement {

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="page-title">
        <div class="background">
          <slot name="background"></slot>
        </div>
        <div class="inner">
          <div class="text">
            <slot></slot>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define('il-page-title', PageTitle);
