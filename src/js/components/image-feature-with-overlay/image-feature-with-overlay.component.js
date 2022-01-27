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
          <slot name="image"></slot>
          <div class="il-image-feature-with-overlay-outer">
            <div class="il-image-feature-with-overlay-inner">
              <div class="il-image-feature-with-overlay-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>`;
  }
}

customElements.define('il-image-feature-with-overlay', ImageFeatureWithOverlayComponent);
