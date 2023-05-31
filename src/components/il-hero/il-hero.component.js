import { LitElement, html } from 'lit';
import styles from './hero.styles';
import './hero.scss';

class Hero extends LitElement {

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="hero">
        <div class="background">
          <slot name="background"></slot>
        </div>
        <div class="content-container--level-1 content-outer content-container--for-il-content-margin">
          <div class="content-container--level-2 content-container--for-il-content-max-width">
            <div class="content-container--level-3 content content-container--for-hero-content-max-width">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('il-hero', Hero);
