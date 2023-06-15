import { LitElement, html } from 'lit';
import styles from './il-image-feature.styles';
import "./il-image-feature.css";

class ImageFeatureComponent extends LitElement {

  static get styles() {
    return styles;
  }

  
  static get properties() {
    return {
      _compact: { default: false, type: Boolean, attribute: false, state: true },
      linkedby: { default: false, type: String, attribute: true },
      highlight: {default: false, type: Boolean, attribute: true, reflect: true}
    };
  }

  static hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  static determineClickable() {
    return CSS.supports('container-type', 'inline-size');
  }

  handleResize(evt) {
    this._compact = this.offsetWidth < 768;
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
    if (this.linkedby != '') {
      let anchor = this.querySelector("#" + this.linkedby);
      if (anchor != null) {
        anchor.addEventListener("focus", (event) => { this.highlight = true; });
        anchor.addEventListener("blur", (event) => { this.highlight = false; });
      } else {
        console.debug(`Image Feature: ID ${this.linkedby} not found`);
        this.linkedby = ''
      }
    }
  }

  _click(e) {
    let anchor = this.querySelector("#" + this.linkedby);
    anchor.click();
  }

  _higlight(e) {
    this.highlight = true;
    let anchor = this.querySelector("#" + this.linkedby);
    anchor.focus();
  }

  _tonedown(e) {
    this.highlight = false;
    let anchor = this.querySelector("#" + this.linkedby);
    anchor.blur();
  }

  render() {
    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-image-feature" && 
      !this.previousElementSibling.classList.contains('il-float-right') && !this.previousElementSibling.classList.contains('il-float-left') && 
      !this.classList.contains('il-float-right') && !this.classList.contains('il-float-left')) {
        this.classList.add('il-float-right');
    }
    if (this.linkedby != '') {
      return html`
        <div id="container" ?compact=${this._compact} @click="${this._click}" @mouseover="${this._higlight}" @mouseout="${this._tonedown}">
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
