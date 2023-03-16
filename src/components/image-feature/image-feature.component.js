import { LitElement, html } from 'lit';
import styles from './image-feature.css';
import Debugger from '../../js/debug';
import "./image-feature.scss";

class ImageFeatureComponent extends LitElement {

  static get properties() {
    return {
        size: {type: String, attribute: true},
        background: {type: String, attribute: true},
        src: {type: String, attribute: true},
        alt: {type: String, attribute: true},
        align: {type: String, attribute: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.size = '';
    this.src = undefined;
    this.alt = '';
    this.background = '';
    this.align = '';
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hasAttribute('align')) {
      Debugger.warn("il-image-feature: the \"align\" attribute is deprecated. Use alignment classes instead.");
    }
    if (this.hasAttribute('alt')) {
      Debugger.warn("il-image-feature: the \"alt\" attribute is deprecated. Use the image slot instead.");
    }
    if (this.hasAttribute('background')) {
      Debugger.warn("il-image-feature: the \"background\" attribute is deprecated. Use a slotted image element instead.");
    }
    if (this.hasAttribute('size')) {
      Debugger.warn("il-image-feature: the \"size\" attribute is deprecated. Use size classes instead.");
    }
    if (this.hasAttribute('src')) {
      Debugger.warn("il-image-feature: the \"src\" attribute is deprecated. Use the image slot instead.");
    }
  }

  render() {
    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-image-feature" && !this.previousElementSibling.classList.contains('il-align-right') && !this.previousElementSibling.classList.contains('il-align-left') && !this.classList.contains('il-align-right') && !this.classList.contains('il-align-left')) {
      this.classList.add('il-align-right');
    }

    if (this.background !== '') {
      if (this.background == 'solid' || this.background == 'blue') {
        this.classList.add('il-theme-blue');
      }
      else if (this.background == 'orange') {
        this.classList.add('il-theme-orange');
      }
    }
    if (this.align !== '') {
      if (this.align == 'left') {
        this.classList.add('il-align-left');
      }
      else if (this.align == 'right') {
        this.classList.add('il-align-right');
      }
    }
    if (this.size !== '') {
      if (this.size == 'portrait') {
        this.classList.add('il-size-xsmall');
      }
      else if (this.size == 'small') {
        this.classList.add('il-size-small');
      }
      else if (this.size == 'large') {
        this.classList.add('il-size-large');
      }
    }
    if (this.src !== undefined) {
      return html`
      <div class="imagefeature">
          <div class="background"><img src='${this.src}' alt='${this.alt}' style='object-fit: cover; position: absolute; width: 100%; height: 100%;'></div>
          <div class="content">
            <div class="content-inner">
              <slot></slot>
            </div>
          </div>
      </div>`;
    }

    if (this.classList.contains('il-overlay')) {
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

    return html`
        <div class="imagefeature">
            <div class="background"><slot name="image"></slot></div>
            <div class="content">
              <div class="content-inner">
                <slot></slot>
              </div>
            </div>
        </div>`;
  }
}

customElements.define('il-image-feature', ImageFeatureComponent);
