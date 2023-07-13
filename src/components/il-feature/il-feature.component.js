import { LitElement, html } from 'lit';
import styles from './il-feature.styles';
import "./il-feature.css";

class FeatureComponent extends LitElement {
  static get compactSizePixelWidth() {
    return 768;
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      _compact: { default: false, type: Boolean, attribute: false, state: true }
    };
  }

  static hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  handleResize(evt) {
    this._compact = this.offsetWidth < FeatureComponent.compactSizePixelWidth;
  }

  handleResizeEvent() {
  }

  addResizeListeners() {
    console.debug("Feature: No support for @container detected: using manual resize");
    window.addEventListener('load', this.handleResize.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
   }

   removeResizeListeners() {
    console.debug("Feature: removing resize");
    window.removeEventListener('load', this.handleResize.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
   }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    if (!FeatureComponent.hasContainerSupport()) {
     this.addResizeListeners();
   }
 }
   
   disconnectedCallback() {
     if (!FeatureComponent.hasContainerSupport()) {
       this.removeResizeListeners();
     }
     super.disconnectedCallback();
   }

  render() {
    return html`
        <div id="container" class="${this.compact ? 'compact' : ''}">
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
