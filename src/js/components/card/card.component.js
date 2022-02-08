import { LitElement, html } from 'lit';
import styles from './card.css';

class Card extends LitElement {

  static get properties() {
    return {
        width: {type: String, attribute: true},
        src: {type: String, attribute: true},
        alt: {type: String, attribute: true},
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.width = '';
  }

  render() {
    let widthStyle = this.width == '' ? '' : `width: ${this.width};`;
    if (this.src == '') {
      return html`
      <article style="${widthStyle}">
          <div class="text nopicture"><slot></slot></div>
      </article>
      `;
    }
   
    return html`
      <article style="${widthStyle}">
        <img src="${this.src}" alt="${this.alt}">
          <div class="text"><slot></slot></div>
      </article>
      `;
  }
}

customElements.define('il-card', Card);
