import { LitElement, html, css } from 'lit';
import itemStyles from '../../shared/navigation/item.css';
import styles from './il-nav-section.css'

class NavigationSection extends LitElement {

  static get properties() {
    return {
      expanded: { type: Boolean, default: false, reflect: true }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.expanded = false;
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(evt) {
    console.debug('click');
    this.expanded = !this.expanded;
  }

  render() {
    const expanded = this.expanded ? 'expanded' : 'collapsed';
    const ariaExpanded = this.expanded ? 'true' : 'false';
    return html`
      <div id="container" class=${expanded}>
        <div id="header">
          <slot name="link"></slot>
          <button aria-controls="content" aria-expanded=${ariaExpanded} @click=${this.handleButtonClick}>
            <slot name="label">
              <span class="placeholder">Toggle this section</span>
            </slot>
            <span id="icon">
              <span id="chevron">
                <svg aria-label="Toggle menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                </svg>
              </span>
            </span>
          </button>
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `
  }
}

customElements.define('il-nav-section', NavigationSection);
