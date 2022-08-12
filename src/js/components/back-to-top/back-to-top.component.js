import { LitElement, html } from 'lit';
import styles from './back-to-top.css';

class BackToTop extends LitElement {

  static get properties() {
    return {
      alt: { type: String, attribute: true },
      target: { type: String, attribute: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.alt = 'Back to top';
    this.target = null;
    this.expectedPositionAfterScroll = null;
    this.continueScroll = this.continueScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.handleScroll);
  }

  continueScroll() {
    if (!this.isTopOfPage() && this.isInExpectedPosition()) {
      this.scrollToTop();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.handleScroll);
  }

  getButton() {
    return this.shadowRoot.querySelector('button');
  }

  getFoldPosition() {
    return window.innerHeight * .8;
  }

  getNextScrollPosition() {
    return Math.max(this.getTopOfPage(), this.getScrollPosition() - 50);
  }

  getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  getTopOfPage() {
    if (this.target && document.getElementById(this.target)) {
      return document.getElementById(this.target).getBoundingClientRect().top + document.documentElement.scrollTop
    }
    return 0;
  }

  handleClick(evt) {
    evt.preventDefault();
    this.getButton().blur();
    if (this.isBelowFold()) this.jumpToFold();
    this.startScrollToTop();
  }

  handleScroll(evt) {
    this.updateButton();
  }

  isBelowFold() {
    return this.getScrollPosition() > this.getFoldPosition();
  }

  isInExpectedPosition() {
    return this.getScrollPosition() === this.expectedPositionAfterScroll;
  }

  isNearTopOfPage() {
    return this.getScrollPosition() < (this.getTopOfPage() + 100);
  }

  isTopOfPage() {
    return this.getScrollPosition() <= this.getTopOfPage();
  }

  jumpToFold() {
    window.scrollTo(0, this.getFoldPosition());
  }

  scrollToTop() {
    this.expectedPositionAfterScroll = this.getNextScrollPosition();
    window.scrollTo(0, this.expectedPositionAfterScroll);
    setTimeout(this.continueScroll, 10);
  }

  startScrollToTop() {
    this.scrollToTop();
  }

  updateButton() {
    this.getButton().classList[this.isNearTopOfPage() ? 'add' : 'remove']('top-of-page');
  }

  renderIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="presentation">
      <path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"/>
    </svg>`;
  }

  render() {
    return html`<button @click="${this.handleClick}" class="${this.isTopOfPage() ? 'top-of-page' : ''}"
    aria-label=${this.alt}>${this.renderIcon()}</button>`;
  }
}

customElements.define('il-back-to-top', BackToTop);
