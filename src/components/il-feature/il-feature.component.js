import { LitElement, html } from 'lit';
import styles from './il-feature.styles';
import "./il-feature.css";

class FeatureComponent extends LitElement {

  // Static methods

  static get compactSizePixelWidth() {
    return 768;
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      _compact: { default: false, type: Boolean, attribute: false, state: true }
    };
  }

  // Constructor  

  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
  }

  // Component lifecycle

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasContainerSupport()) {
      this.addResizeListeners();
    }
  }

  disconnectedCallback() {
    if (!this.hasContainerSupport()) {
      this.removeResizeListeners();
    }
    super.disconnectedCallback();
  }

  // Event handlers

  hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  handleResize(evt) {
    this._compact = this.isCompact();
  }

  addResizeListeners() {
    console.debug("Feature: No support for @container detected: using manual resize");
    window.addEventListener('load', this.handleResize.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  removeResizeListeners() {
    console.debug("Feature: removing resize");
    window.removeEventListener('load', this.handleResize.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  // Object methods

  isCompact() {
    return this.offsetWidth < FeatureComponent.compactSizePixelWidth
  }

  render() {
    return html`
        <div id="container" class="${this._compact ? 'compact' : ''}">
            <div id="image">
                <slot name="image"></slot>
            </div>
            <div id="main">
                <div id="content">
                    <slot></slot>
                </div>
            </div>
        </div>`;
  }
}

customElements.define('il-feature', FeatureComponent);
