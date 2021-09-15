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
        a {
            display: block;
            border: 1px solid var(--il-gray-2);
            border-bottom: 3px solid var(--il-orange);
            margin: var(--il-clickable-card-margin);
            text-decoration: none;
            color: black;
            background: white;
        }
        a.blue {
          background: var(--il-blue);
          color: white;
        }
        a:hover, a:focus {
          background: var(--il-blue);
          color: white;
          border-bottom: 3px solid var(--il-industrial-blue-1);
        }
        a.blue:hover, a.blue:focus {
          background: white;
          color: var(--il-blue);
        }
        img {
            width: 100%;
        }
        a:hover img, a:focus img {
          filter: var(--il-clickable-card-image-filter);
        }

        div.text {
          padding: 1.875rem;
          min-height: 100px;
        }
        `;
  }

  constructor() {
    super();
    this.src = undefined;
    this.href = undefined;
    this.background = undefined;
    this.alt = '';
    this.width = "100%";
    this.highlight = false;
  }
  
  render() {
    let contentClass = this.background == 'blue' ? 'blue' : '';

    return html`
        <a href="${this.href}" class="${contentClass}" style="width: ${this.width};" @focus="${this._higlight}" @blur="${this._tonedown}" @mouseover="${this._higlight}" @mouseout="${this._tonedown}">
            <img src="${this.src}" alt="${this.alt}">
            <div class="text"><slot></slot></div>
        </a>
        `;
  }

  _higlight(e) {
    this.highlight = true;
  }

  _tonedown(e) {
    this.highlight = false;
  }
}

customElements.define('il-clickable-card', ClickableCard);
