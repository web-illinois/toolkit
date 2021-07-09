import {LitElement, html} from 'lit-element';
import fingerprint from '../elements/fingerprint';
import Alignment from '../lib/alignment';
import styles from './hero.css';

class Hero extends LitElement {

  static get properties() {
    return {
        align: {type: String, attribute: true},
        background: {type: String, attribute: true},
        duotone: {type: Boolean, attribute: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.align = '';
    this.background = undefined;
    this.duotone = false;
  }

  renderDuotone() {
      return html`
        <div class="duotone overlay duotone--light"></div>
        <div class="gradient overlay duotone--dark"></div>
    `;
  }

  renderBackgroundImage() {
    return html`
        <div class="background-image">
            <img src="${this.background}" alt="">
        </div>
    `;
  }

  render() {
    const alignment = new Alignment(this.align);
    const heroClass = [];
    if (this.duotone) heroClass.push('duotone');
    return html`
        <div class="hero ${heroClass.join(' ')}" data-align-x=${alignment.x} data-align-y=${alignment.y}>
            <div class="background" role="presentation">
                ${this.duotone ? this.renderDuotone(): ''}
                ${this.background ? this.renderBackgroundImage() : ''}
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </div>
        `;
  }
}

customElements.define('il-hero', Hero);
