import { LitElement, html } from 'lit';
import styles from './image-feature.css';

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

  firstUpdated() {
    this.shadowRoot.querySelector('slot[name="image"]').addEventListener('slotchange', (e) => this.setAttributes(e));
  }

  setAttributes(e) {
    if (e.target.assignedNodes()[0].attributes["src"] != undefined) {
      this.src = e.target.assignedNodes()[0].attributes["src"].value;
    }
    if (e.target.assignedNodes()[0].attributes["alt"] != undefined) {
      this.alt = e.target.assignedNodes()[0].attributes["alt"].value;
    }
  }

  render() {

    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-image-feature" && this.previousElementSibling.getAttribute('align') == null && this.align == '') {
        this.setAttribute('align', 'right');
    }
    var contentClass = (this.background == 'solid' || this.background == 'blue') ? 'content solid' : this.background == 'white' ? 'content white' : this.background == 'orange' ? 'content orange' : 'content gradient';
    var heightOption = this.size == 'portrait' ? 'imagefeature noheight' : 'imagefeature';
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
        <div style="display: none;"><slot name="image"></slot></div>
        <div class="${heightOption} ${this.align} ${this.size}">
            <div class="background" style="background-image: url('${this.src}');" role="img" aria-label="${this.alt}"></div>
            <div class="${contentClass}">
                <slot></slot>
            </div>
        </div>`;
  }
}

customElements.define('il-image-feature', ImageFeatureComponent);
