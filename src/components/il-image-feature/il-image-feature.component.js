import { LitElement, html } from 'lit';
import styles from './il-image-feature.styles';
import "./il-image-feature.css";

class ImageFeatureComponent extends LitElement {
  static get compactSizePixelWidth() {
    return 768;
  }

  static get highlightAttribute() {
    return 'data-il-image-feature-highlight';
  }
  
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      _compact: { default: false, type: Boolean, attribute: false, state: true },
      linkedby: { default: false, type: String, attribute: true }
    };
  }

  static hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  handleResize(evt) {
    this._compact = this.offsetWidth < ImageFeatureComponent.compactSizePixelWidth;
  }

   getLinkElement() {
     return document.getElementById(this.linkedby);
   }

  constructor() {
    super();
    if (!ImageFeatureComponent.hasContainerSupport()) {
      console.debug("Image Feature: No support for @container detected: using manual resize");
      window.addEventListener('load', this.handleResize.bind(this));
      window.addEventListener('resize', this.handleResize.bind(this));
    }
  }

  firstUpdated() {
    if (this.linkedby && this.linkedby != '') {
      let anchor = this.getLinkElement();
      if (anchor != null) {
        anchor.addEventListener("focus", (event) => { this.setHighlight(); });
        anchor.addEventListener("blur", (event) => { this.removeHighlight(); });
      } else {
        console.debug(`Image Feature: ID ${this.linkedby} not found`);
        this.linkedby = null;
      }
    }
  }

  _click(e) {
    this.getLinkElement().click();
  }

  setHighlight() {
    return this.setAttribute(ImageFeatureComponent.highlightAttribute, true);
  }

  removeHighlight() {
    return this.removeAttribute(ImageFeatureComponent.highlightAttribute);
  }

  _highlight(e) {
    this.setHighlight();
    this.getLinkElement().focus();
  }

  _tonedown(e) {
    this.removeHighlight();
    this.getLinkElement().blur();
  }

  render() {
    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-image-feature" && 
      !this.previousElementSibling.classList.contains('il-float-right') && !this.previousElementSibling.classList.contains('il-float-left') && 
      !this.classList.contains('il-float-right') && !this.classList.contains('il-float-left')) {
        this.classList.add('il-float-right');
    }
    if (this.linkedby && this.linkedby != '') {
      return html`
        <div id="container" ?compact=${this._compact} @click="${this._click}" @mouseover="${this._highlight}" @mouseout="${this._tonedown}">
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
    return html`
        <div id="container" ?compact=${this._compact}>
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
