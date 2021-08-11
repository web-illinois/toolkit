import { LitElement, html } from 'lit-element';
import styles from './unit-wordmark.css';

const breakpoint = 400;

class UnitWordmark extends LitElement {

  static get properties() {
    return {
      compact: { default: false, attribute: false }
    };

  }

  static get styles() {
    return styles;
  }

  static hasContainerSupport() {
    return CSS.supports('contain', 'inline-size');
  }

  constructor() {
    super();
    this.compact = false;
    if (!UnitWordmark.hasContainerSupport()) {
      console.debug("Wordmark: No support for @container detected: using manual resize");
      window.addEventListener('load', this.handleResize.bind(this));
      window.addEventListener('resize', this.handleResize.bind(this));
    }
  }

  getWidth() {
    return this.offsetWidth;
  }

  handleResize(evt) {
    this.compact = this.getWidth() < breakpoint;
  }

  isCompact() {
    return !UnitWordmark.hasContainerSupport() && this.compact;
  }

  renderBlockI() {
    return html`
<svg class="block-i" mlns="http://www.w3.org/2000/svg" viewBox="0 0 55 79">
  <title>Block I logo</title>
  <path class="block-i__outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1z" />
  <path class="block-i__fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3z" />
</svg>
        `;
  }

  render() {
    const compact = this.isCompact() ? 'compact' : '';
    return html`
<div class="wordmark ${compact}">
  <div class="campus">
    <a href="https://illinois.edu">${this.renderBlockI()}</a>
  </div>
  <div class="unit">
    <slot></slot>
  </div>
</div>
        `;
  }
}

customElements.define('il-unit-wordmark', UnitWordmark);
