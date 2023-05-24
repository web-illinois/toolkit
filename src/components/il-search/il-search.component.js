import {LitElement, html, css} from 'lit';
import Debugger from '../../js/debug';
import '../il-icon/il-icon.component';
import styles from './il-search.css';

class Search extends LitElement {
  static get properties() {
    return {
      action: {type: String, attribute: true},
      label: {type: String, attribute: true},
      name: {type: String, attribute: true},
      method: {type: String, attribute: true},
      placeholder: {type: String, attribute: true},
      query: {type: String, attribute: true},
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.action = '';
    this.label = 'Search';
    this.method = 'GET';
    this.name = 's';
    this.placeholder = 'Search this site';
    this.query = '';
  }

  render() {
    return html`
      <form role="search" method=${this.method} action=${this.action}>
          <label for="query">Search</label>
          <input type="search" id="query" name=${this.name} value=${this.query} placeholder=${this.placeholder}>
          <button type="submit">
              <il-icon>search</il-icon>
          </button>
      </form>
    `;
  }
}

customElements.define('il-search', Search);
