import { LitElement, html } from 'lit';
import styles from './image-feature-with-overlay.css';

class ImageFeatureWithOverlayComponent extends LitElement {

  static get properties() {
    return {
        src: {type: String, attribute: true},
        alt: {type: String, attribute: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.src = undefined;
    this.alt = '';
  }


  render() {

    return html`
        <div class="il-image-feature-with-overlay">
          <div class="il-image-feature-with-overlay-image">
            <slot name="image"></slot>
          </div>
          <div class="il-image-feature-with-overlay-content">
            <slot></slot>
          </div>
        </div>`;
  }
}

customElements.define('il-image-feature-with-overlay', ImageFeatureWithOverlayComponent);
