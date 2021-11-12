import { LitElement, html } from 'lit';
import fingerprint from '../elements/fingerprint';
import Alignment from '../lib/alignment';
import styles from './hero.css';

class Hero extends LitElement {

  static get properties() {
    return {
      align: { type: String, attribute: true },
      alt: { type: String, attribute: true },
      background: { type: String, attribute: true },
      color: { type: String, attribute: true, default: "blue" },
      duotone: { type: Boolean, attribute: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.align = '';
    this.alt = '';
    this.background = undefined;
    this.color = "blue";
    this.duotone = false;
  }

  renderBackground() {
    return html`
      <div class="background" role="presentation">
        ${this.duotone ? this.renderDuotone() : ''}
        ${this.background ? this.renderBackgroundImage() : ''}
      </div>
    `;
  }

  renderBackgroundImage() {
    return html`
        <div class="background-image">
          <img src="${this.background}" alt="${this.alt}">
        </div>
    `;
  }

  renderDuotone() {
    return html`
      <div class="duotone overlay duotone--light"></div>
      <div class="gradient overlay duotone--dark"></div>
  `;
  }

  render() {
    const alignment = new Alignment(this.align);
    const heroClass = [this.color];
    if (this.background) heroClass.push('with-background');
    if (this.duotone) heroClass.push('with-duotone');
    return html`
        <div class="hero ${heroClass.join(' ')}" data-align-x=${alignment.x} data-align-y=${alignment.y}>
          ${this.background ? this.renderBackground() : ''}
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
