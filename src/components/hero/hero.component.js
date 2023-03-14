import { LitElement, html } from 'lit';
import Alignment from './alignment';
import Debugger from '../../js/debug';
import styles from './hero.css';
import './hero.scss';

class Hero extends LitElement {

  static get properties() {
    return {
      align: { type: String, attribute: true },
      alt: { type: String, attribute: true },
      background: { type: String, attribute: true },
      color: { type: String, attribute: true, default: "blue" },
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
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hasAttribute('align')) {
      Debugger.warn("il-hero: the \"align\" attribute is deprecated. Use alignment classes instead.");
    }
    if (this.hasAttribute('alt')) {
      Debugger.warn("il-hero: the \"alt\" attribute is deprecated. Use a slotted image element with alt text instead.");
    }
    if (this.hasAttribute('background')) {
      Debugger.warn("il-hero: the \"background\" attribute is deprecated. Use a slotted image element instead.");
    }
    if (this.hasAttribute('color')) {
      Debugger.warn("il-hero: the \"color\" attribute is deprecated. Use theme classes instead.");
    }
  }

  renderBackgroundImage() {
    return html`
        <img src="${this.background}" alt="${this.alt}">
    `;
  }

  render() {
    const alignment = new Alignment(this.align);
    const color = this.color;
    return html`
        <div class="hero" data-color=${color} data-align-x=${alignment.x} data-align-y=${alignment.y}>
          <div class="background">
            <slot name="background">
              ${this.background ? this.renderBackgroundImage() : ''}
            </slot>
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
