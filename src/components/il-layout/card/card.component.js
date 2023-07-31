import { LitElement, html } from 'lit';
import styles from './card.styles';
import "./card.css";

class Card extends LitElement {

  static get properties() {
    return {
      link: {type: Boolean, default: false, attribute: true},
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.link = false;
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  elementIsLink(elem) {
    const link = this.getLinkElement();
    return elem === link || link.contains(elem);
  }

  getLinkElement() {
    return this.querySelector('a');
  }

  hasLinkElement() {
    return !!this.getLinkElement();
  }

  isLink() {
    return this.link;
  }

  handleClick(evt) {
    if (this.isLink() && this.hasLinkElement()) {
      if (!this.elementIsLink(evt.target)) this.getLinkElement().click();
    }
  }

  render() {
    return html`
      <div class="card">
          <slot></slot>
      </div>
      `;
  }
}

customElements.define('il-card', Card);
