import { LitElement, html, css } from 'lit';
import itemStyles from '../../shared/navigation/item.css';
import styles from './il-nav-section.css'
import './il-nav-section.scss'
import "../il-nav-indicator/il-nav-indicator.component";

class NavigationSection extends LitElement {

  static get properties() {
    return {
      //size: { type: String, default: 'collapsed', reflect: true },
      //expanded: { type: Boolean, default: false, attribute: false },
      _expanded: { state: true, type: Boolean, default: false }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.expanded = false;
    this._expanded = false;
    this.size = 'collapsed';
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('data-il-nav-level', this.getLevel());
  }

  handleButtonClick(evt) {
    this.dispatchEvent(new CustomEvent('toggle'));
    //this.toggle();
  }

  collapse() {
    this.expanded = false;
    this._expanded = false;
    this.size = 'collapsed';
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
    this._expanded = true;
    this.size = 'expanded';
  }

  isExpanded() {
    return this._expanded;
    return this.size === 'expanded';
  }

  toggle() {
    this.isExpanded() ? this.collapse() : this.expand();
  }

  render() {
    const size = this.isExpanded() ? 'expanded' : 'collapsed';
    const ariaExpanded = this.isExpanded() ? 'true' : 'false';
    const label = "Toggle this section";
    return html`
      <div id="container" class=${size}>
        <div id="header">
          <slot name="link"></slot>
          <button aria-controls="content" aria-expanded=${ariaExpanded} @click=${this.handleButtonClick}>
            <slot name="label">
              <span class="placeholder">${label}</span>
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
