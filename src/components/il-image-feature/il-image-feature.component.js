import { LitElement, html } from 'lit';
import styles from './il-image-feature.styles';
import "./il-image-feature.css";

class ImageFeatureComponent extends LitElement {

  static get styles() {
    return styles;
  }

  
  static get properties() {
    return {
      compact: { default: false, attribute: false }
    };
  }

  static hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  handleResize(evt) {
    this.compact = this.offsetWidth < 768;
  }

  constructor() {
    super();
    if (!ImageFeatureComponent.hasContainerSupport()) {
      console.debug("Image Feature: No support for @container detected: using manual resize");
      window.addEventListener('load', this.handleResize.bind(this));
      window.addEventListener('resize', this.handleResize.bind(this));
    }
  }

  render() {
    return html`
        <div id="container" ?compact=${this.compact}>
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

customElements.define('il-image-feature', ImageFeatureComponent);
