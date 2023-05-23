import { LitElement, html, css } from 'lit';
import itemStyles from '../../shared/navigation/item.css';
import styles from './il-nav-section.css'
import './il-nav-section.scss'
import "../il-nav-indicator/il-nav-indicator.component";

class NavigationSection extends LitElement {

  static get properties() {
    return {
      label: { type: String },
      _expanded: { state: true, type: Boolean, default: false }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.label = 'Toggle this section';
    this._expanded = false;
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(evt) {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

  get collapsed() {
    return !this.expanded;
  }

  get expanded() {
    return this._expanded;
  }

  collapse() {
    this._expanded = false;
  }

  expand() {
    this._expanded = true;
  }

  render() {
    const size = this.expanded ? 'expanded' : 'collapsed';
    const ariaExpanded = this.expanded ? 'true' : 'false';
    return html`
      <div id="container" class=${size}>
        <div id="header">
          <slot name="link"></slot>
          <button aria-controls="content" aria-expanded=${ariaExpanded} @click=${this.handleButtonClick}>
            <slot name="label">
              <span class="placeholder">${this.label}</span>
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
