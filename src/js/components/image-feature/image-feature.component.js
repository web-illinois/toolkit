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


  render() {

    if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-image-feature" && this.previousElementSibling.getAttribute('align') == null && this.align == '') {
        this.setAttribute('align', 'right');
    }
    var contentClass = (this.background == 'solid' || this.background == 'blue') ? 'content solid' : this.background == 'white' ? 'content white' : this.background == 'orange' ? 'content orange' : 'content gradient';
    var heightOption = this.size == 'portrait' ? 'imagefeature noheight' : 'imagefeature';
    return html`
        <div class="${heightOption} ${this.align} ${this.size}">
            <div class="background" role="presentation" style="background-image: url('${this.src}');">${this.alt}</div>
            <div class="${contentClass}">
                <slot></slot>
            </div>
        </div>`;
  }
}

customElements.define('il-image-feature', ImageFeatureComponent);
