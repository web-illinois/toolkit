import {LitElement, html, css} from 'lit';
import Debugger from '../../debug';
import styles from './search.css';

class Search extends LitElement {
  static get properties() {
    return {
      action: {type: String, attribute: true},
      buttonHasFocus: {type: Boolean, attribute: false},
      inputHasFocus: {type: Boolean, attribute: false},
      label: {type: String, attribute: true},
      name: {type: String, attribute: true},
      method: {type: String, attribute: true},
      placeholder: {type: String, attribute: true},
      query: {type: String, attribute: true},
      searchname: {type: String, attribute: true}
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.action = '';
    this.inputHasFocus = false;
    this.label = 'Search';
    this.method = 'GET';
    this.name = 's';
    this.placeholder = 'Search this site';
    this.query = '';
    this.searchname = undefined;
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  getName() {
    return this.searchname || this.name;
  }

  handleButtonBlur(evt) {
    this.buttonHasFocus = false;
  }

  handleButtonFocus(evt) {
    this.buttonHasFocus = true;
  }

  handleContentLoaded(evt) {
    const header = this.getHeader();
    if (this.searchname) {
      Debugger.warn('Search component: The "searchname" is deprecated; use "name" instead.');
    }
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
    return this.closest('il-header');
  }

  renderSearchIcon() {
    return html`<svg role="image" aria-label="Submit search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26">
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
    <input type="search" id="query" name=${this.getName()} value=${this.query} placeholder=${this.placeholder} @focus=${this.handleInputFocus} @blur=${this.handleInputBlur}>
    <button type="submit" @focus=${this.handleButtonFocus} @blur=${this.handleButtonBlur}>
        ${this.renderSearchIcon()}
    </button>
</form>
    `;
  }
}

customElements.define('il-search', Search);
