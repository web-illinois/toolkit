import { LitElement, html } from 'lit';
import styles from './il-image-feature.css.js';
import "./il-image-feature.css";

class ImageFeatureComponent extends LitElement {

  static get styles() {
    return styles;
  }

  render() {
    return html`
        <div id="container">
            <div id="image">
                <slot name="image"></slot>
            </div>
            <div id="main">
                <div id="background"></div>
                <div id="content">
                    <slot></slot>
                </div>
            </div>
        </div>`;
  }
}

customElements.define('il-image-feature', ImageFeatureComponent);