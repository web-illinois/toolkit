import { LitElement, html } from 'lit';
import styles from './profile.css';

class Profile extends LitElement {

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <article class="profile">
          <slot></slot>
      </article>
      `;
  }
}

customElements.define('il-profile', Profile);
