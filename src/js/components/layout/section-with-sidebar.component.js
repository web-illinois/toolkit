import { LitElement, html, css } from 'lit';
import styles from './section-with-sidebar.css';

class SectionWithSidebarComponent extends LitElement {

  static get properties() {
    return {
      compact: { type: Boolean, attribute: true, default: false, reflect: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this._compact = false;
    document.addEventListener('DOMContentLoaded', this.handleDocumentLoaded.bind(this));
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  get compact() {
    return this._compact;
  }

  set compact(isCompact) {
    const wasCompact = this._compact;
    if (wasCompact !== isCompact) {
      this._compact = isCompact;
      this.requestUpdate('compact', wasCompact);
      this.updateComplete.then(() => {
        const evt = new CustomEvent('compact', { detail: isCompact });
        this.dispatchEvent(evt);
      });
    }
  }

  handleDocumentLoaded(evt) {
    this.handleWindowResize();
  }

  handleWindowResize() {
    this.compact = !window.matchMedia("(min-width: 992px)").matches;
  }

  render() {
    const mode = this.compact ? 'compact': 'full';
    return html`
<section class=${mode}>
  <div class="sidebar">
    <slot name="sidebar"></slot>
  </div>
  <div class="main">
    <slot></slot>
  </div>
</section>
    `;
  }
}

customElements.define('il-section-with-sidebar', SectionWithSidebarComponent);
