import { LitElement, html } from 'lit';
import ResponsiveLayout from './responsive-layout';
import styles from './section-with-sidebar.css';

class SectionWithSidebarComponent extends ResponsiveLayout {

  static get modes() {
    return [
      { name: 'compact' },
      { name: 'full', match: '(min-width: 992px)' }
    ]
  }

  static get properties() {
    return super.properties;
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  render() {
    const mode = this.mode;
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
