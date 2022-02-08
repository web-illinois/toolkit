import { LitElement, html } from 'lit';
import styles from './clickable-card.css';

class ClickableCard extends LitElement {

  static get properties() {
    return {
        width: {type: String, attribute: true},
        src: {type: String, attribute: true},
        alt: {type: String, attribute: true},
        href: {type: String, attribute: true},
        background: {type: String, attribute: true},
        highlight: {type: Boolean, attribute: true, reflect: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.src = '';
    this.href = undefined;
    this.background = undefined;
    this.alt = '';
    this.width = '';
    this.highlight = false;
  }

  renderHiddenParagraph() {
    return html`<p class="header il-invisible">${(this.alt == '' ? 'Clickable Card' : this.alt)}</p>`;
  }

  firstUpdated() {
    this.shadowRoot.querySelector('slot[name="header"]').addEventListener('slotchange', (e) => this.removeHiddenInformation(e));
  }

  removeHiddenInformation(e) {
    e.target.querySelector('p').remove();
  }
 
  render() {
    let contentClass = this.background == 'blue' ? 'blue' : '';
    let widthStyle = this.width == '' ? '' : `width: ${this.width};`;
    let idInfo = 'card-' + (((1+Math.random())*0x10000000)|0);
    if (this.src == '') {
      return html`
      <article aria-labelledby="${idInfo}" class="${contentClass}" style="${widthStyle}" @click="${this._click}" @mouseover="${this._higlight}" @mouseout="${this._tonedown}">
          <div class="text nopicture"><a id="${idInfo}" @focus="${this._higlight}" @blur="${this._tonedown}" href="${this.href}"><slot name="header">${this.renderHiddenParagraph()}</slot></a><slot></slot></div>
      </article>
      `;
    }
   
    return html`
        <article aria-labelledby="${idInfo}" class="${contentClass}" style="${widthStyle}" @click="${this._click}" @mouseover="${this._higlight}" @mouseout="${this._tonedown}">
            <img src="${this.src}" alt="${this.alt}">
            <div class="text"><a id="${idInfo}" @focus="${this._higlight}" @blur="${this._tonedown}" href="${this.href}"><slot name="header">${this.renderHiddenParagraph()}</slot></a><slot></slot></div>
        </article>
        `;
  }

  _click(e) {
    if (this.href !== undefined) {
      window.location = this.href;
    } 
  }

  _higlight(e) {
    this.highlight = true;
    this.shadowRoot.querySelector('article').classList.add('highlight');
  }

  _tonedown(e) {
    this.highlight = false;
    this.shadowRoot.querySelector('article').classList.remove('highlight');
  }
}

customElements.define('il-clickable-card', ClickableCard);
