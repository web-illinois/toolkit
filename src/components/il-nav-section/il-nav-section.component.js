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

  connectedCallback() {
    super.connectedCallback();
    this.updateDataAttributes();
  }

  handleButtonClick(evt) {
    this.toggle();
  }

  collapse() {
    this.expanded = false;
    this.updateDataAttributes();
  }

  getLevel() {
    let level = 1, parent = this.parentElement;
    while (parent.closest('il-nav-section')) {
      level++;
      parent = parent.closest('il-nav-section').parentElement;
    }
    return level;
  }

  expand() {
    this.expanded = true;
    this.updateDataAttributes();
  }

  toggle() {
    this.expanded = !this.expanded;
    this.updateDataAttributes();
  }

  updateDataAttributes() {
    this.setAttribute('data-il-state', this.expanded ? 'expanded' : 'collapsed');
    this.setAttribute('data-il-nav-level', this.getLevel());
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
            <span id="indicator">
              <il-nav-indicator></il-nav-indicator>
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
