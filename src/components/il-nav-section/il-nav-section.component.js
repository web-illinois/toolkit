import { LitElement, html, css } from 'lit';
import styles from './il-nav-section.styles'
import './il-nav-section.css'
import "../il-nav-indicator/il-nav-indicator.component";

class NavigationSection extends LitElement {

  static get properties() {
    return {
      label: { type: String },
      _enabled: { state: true, type: Boolean, default: false },
      _expanded: { state: true, type: Boolean, default: false }
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.label = 'Expand';
    this._enabled = false;
    this._expanded = false;
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(evt) {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

  get collapsed() {
    return !this.expanded;
  }

  get enabled() {
    return this._enabled;
  }

  get expanded() {
    return this._expanded;
  }

  collapse() {
    this._expanded = false;
  }

  disable() {
    this._enabled = false;
  }

  enable() {
    this._enabled = true;
  }

  expand() {
    this._expanded = true;
  }

  render() {
    const size = this.expanded ? 'expanded' : 'collapsed';
    const enabled = this.enabled ? 'enabled' : 'disabled';
    const ariaExpanded = this.expanded ? 'true' : 'false';
    const ariaPressed = this.expanded ? 'true' : 'false';
    let toggle = html`
      <div id="toggle">
          <slot name="label"></slot>
      </div>
    `;
    if (this.enabled) {
      toggle = html`
        <div id="toggle" role="button" aria-pressed=${ariaPressed} aria-controls="content" aria-expanded=${ariaExpanded} @click=${this.handleToggleClick}>
          <slot name="label">
            <span class="placeholder">${this.label}</span>
          </slot>
          <span id="indicator">
            <il-nav-indicator></il-nav-indicator>
          </span>
        </div>
      `;
    }
    return html`
      <div id="container" class=${[size, enabled].join(' ')}>
        <div id="header">
          <slot name="link"></slot>
          ${toggle}
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `
  }
}

customElements.define('il-nav-section', NavigationSection);
