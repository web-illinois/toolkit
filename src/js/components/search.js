import {LitElement, html, css} from 'lit-element';

class Search extends LitElement {
  static get properties() {
    return {
      action: {type: String, attribute: true},
      buttonHasFocus: {type: Boolean, attribute: false},
      inputHasFocus: {type: Boolean, attribute: false},
      label: {type: String, attribute: true},
      method: {type: String, attribute: true},
      placeholder: {type: String, attribute: true}
    }
  }

  static get styles() {
    return css`
form {
  display: grid;
  height: 44px;
  grid-template-columns: auto 60px;
  grid-gap: 2px;
  border: 2px solid var(--il-cloud-3);
  background-color: var(--il-cloud-3);
  margin-left: 10px;
}
form.input-has-focus {
  border-color: var(--il-blue);
}
label {
  display: none;
}
input {
  margin: 0;
  padding: 5px;
  border: 0;
  font: 16px/18px var(--il-source-sans);
  background-color: white;
}
input:focus {
  outline: 0;
}
button {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: white;
  color: #606060;
}
button:focus {
  outline: 2px solid var(--il-blue);
  color: var(--il-blue);
}
button svg {
  display: block;
  position: absolute;
  left: calc(50% - 10px);
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  fill: currentcolor;
}
    `
  }

  constructor() {
    super();
    this.action = '';
    this.inputHasFocus = false;
    this.label = 'Search';
    this.method = 'GET';
    this.placeholder = 'Search this site';
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  handleButtonBlur(evt) {
    this.buttonHasFocus = false;
  }

  handleButtonFocus(evt) {
    this.buttonHasFocus = true;
  }

  handleContentLoaded(evt) {
    const header = this.getHeader();
    if (header) {
      header.addEventListener('viewChange', this.handleHeaderViewChange.bind(this));
    }
  }

  handleHeaderViewChange(evt) {
    //console.debug(evt.detail);
  }

  handleInputBlur(evt) {
    this.inputHasFocus = false;
  }

  handleInputFocus(evt) {
    this.inputHasFocus = true;
  }

  getHeader() {
    let parent = this.parentElement;
    while (parent) {
      if (parent.nodeName === 'IL-HEADER') {
        return parent;
      }
      parent = parent.parentElement;
    }
    return undefined;
  }

  renderSearchIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26">
        <path d="M31.46 5.21a18.2 18.2 0 10-2.13 27.54L44 49.56a4.32 4.32 0 006.11-6.12L33.39 28.65a18.19 18.19 0 00-1.93-23.44zM28 27.48a13.29 13.29 0 110-18.79 13.3 13.3 0 010 18.79z"/>
    </svg>`
  }

  render() {
    const classNames = [];
    if (this.inputHasFocus) {
      classNames.push('input-has-focus');
    }
    if (this.buttonHasFocus) {
      classNames.push('button-has-focus');
    }
    return html`
<form role="search" method=${this.method} action=${this.action} class="${classNames.join(' ')}">
    <label for="query">Search</label>
    <input type="search" id="query" placeholder=${this.placeholder} @focus=${this.handleInputFocus} @blur=${this.handleInputBlur}>
    <button type="submit" @focus=${this.handleButtonFocus} @blur=${this.handleButtonBlur}>
        ${this.renderSearchIcon()}
    </button>
</form>
    `;
  }
}

customElements.define('il-search', Search);
