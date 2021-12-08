import {LitElement, html, css} from 'lit';

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
    return css`
        article {
            display: block;
            border: 1px solid var(--il-gray-2);
            border-bottom: 3px solid var(--il-orange);
            margin: var(--il-clickable-card-margin);
            text-decoration: none;
            color: #252525;
            background: white;
        }
        article.blue {
          background: var(--il-blue);
          color: white;
        }
        article.highlight {
          background: var(--il-blue);
          color: white;
          border-bottom: 3px solid var(--il-industrial-blue-1);
          cursor: pointer;
        }
        article.blue.highlight {
          background: white;
          color: var(--il-blue);
        }
        img {
            width: 100%;
        }
        article.highlight img {
          filter: var(--il-clickable-card-image-filter);
        }
        div.text {
          padding: 1.75rem 1.875rem 2.8rem 1.875rem;
        }
        article a {
          text-decoration: none;
        }
        article a:focus {
          outline-style: none;
          box-shadow: none;
          border-color: transparent;
        }
        .il-invisible {
          position: absolute !important;
          left: -9999px !important;
          top: auto !important;
          display: block !important;
          text-align: left !important;
          text-indent: -9999em !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
        }
        `;
  }

  constructor() {
    super();
    this.src = undefined;
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
