import { LitElement, html } from 'lit';
import styles from './il-profile.styles';
import "./il-profile.css";

class Profile extends LitElement {

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <article class="profile">
        <div class="primary">
          <slot name="primary"></slot>
        </div>
        <div class="photo">
          <slot name="photo"></slot>
        </div>
        <div class="contact">
          <slot name="contact"></slot>
        </div>
        <div class="additional">
          <slot></slot>
        </div>
      </article>
    `;
  }
}

customElements.define('il-profile', Profile);
