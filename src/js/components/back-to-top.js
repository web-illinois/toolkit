import { LitElement, html } from 'lit-element';
import styles from './back-to-top.css';

class BackToTop extends LitElement {
  static get styles() {
    return styles;
  }

  constructor() {
    super();
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
    return Math.max(0, this.getScrollPosition() - 50);
  }

  getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
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
    return this.getScrollPosition() < 100;
  }

  isTopOfPage() {
    return this.getScrollPosition() <= 0;
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
    aria-label="Back to the top of the page">${this.renderIcon()}</button>`;
  }

  __render() {
    return html`
        <button @click="${this.handleClick}" class="${this.isTopOfPage() ? 'top-of-page' : ''}"
          aria-label="Back to the top of the page">
          <svg width="33" height="21" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path
                d="M16.5 21c-.844 0-1.69-.343-2.333-1.025l-13.2-14c-1.29-1.368-1.29-3.58 0-4.949 1.291-1.368 3.377-1.368 4.667 0L16.54 12.593l10.867-11.13c1.316-1.34 3.398-1.301 4.666.088 1.267 1.39 1.23 3.609-.08 4.95l-13.2 13.516A3.194 3.194 0 0116.5 21"
                id="a" />
            </defs>
            <use fill="#FFF" xlink:href="#a" transform="rotate(-180 16.5 10.5)" fill-rule="evenodd" />
          </svg>
        </button>
    `;
  }
}

customElements.define('il-back-to-top', BackToTop);
