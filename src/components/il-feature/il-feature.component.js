import { LitElement, html } from 'lit';
import styles from './il-feature.styles';
import "./il-feature.css";

class FeatureComponent extends LitElement {

  // Static methods

  static get styles() {
    return styles;
  }

  // Constructor

  constructor() {
    super();
    this.containerBreakpoint = 770;
    this.handleResize = this.handleResize.bind(this);
  }

  // Component lifecycle

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasContainerSupport()) {
      this.addResizeListeners();
      this.updateContainerSizeAttribute();
    }
  }

  // Event handlers

  handleResize(evt) {
    this.updateContainerSizeAttribute();
  }

  // Object methods

  addResizeListeners() {
    window.addEventListener('load', this.handleResize);
    window.addEventListener('resize', this.handleResize);
  }

  containerIsSmallerThanBreakpoint() {
    return this.offsetWidth < this.containerBreakpoint
  }

  hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  updateContainerSizeAttribute() {
    this.setAttribute('data-il-container-size', this.containerIsSmallerThanBreakpoint() ? 'small' : 'large');
  }

  // Render

  render() {
    return html`
        <div id="container">
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
