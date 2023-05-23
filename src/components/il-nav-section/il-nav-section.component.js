import { LitElement, html, css } from 'lit';
import itemStyles from '../../shared/navigation/item.css';
import styles from './il-nav-section.css'
import './il-nav-section.scss'
import "../il-nav-indicator/il-nav-indicator.component";

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
            <il-nav-indicator></il-nav-indicator>
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
