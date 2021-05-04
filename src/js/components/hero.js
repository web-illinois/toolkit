import {LitElement, html, css} from 'lit-element';
import fingerprint from '../elements/fingerprint';
import Alignment from '../lib/alignment';

class Hero extends LitElement {

  static get properties() {
    return {
        align: {type: String, attribute: true},
        background: {type: String, attribute: true},
        fingerprint: {type: Boolean, attribute: true},
        gradient: {type: Boolean, attribute: true}
    };
  }

  static get styles() {
    return css`
.hero {
    position: relative;
    background-color: var(--il-blue);
    color: white;
}
.background {
    position: relative;
    width: 100%;
    height: 223px;
    overflow: hidden;
}
.background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.background-image img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 101;
    object-fit: cover;
    object-position: center;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.gradient.overlay {
    background-image:
        linear-gradient(132deg, rgba(255, 85, 46, 0) 51%, rgba(255, 85, 46, 0.05) 56%, rgba(255, 85, 46, 0.04) 56%, rgba(255, 85, 46, 0.8) 82%),
        linear-gradient(-143deg, rgba(248, 246, 245, 0) 43%, rgba(30, 56, 119, 0.7) 77%, var(--il-blue) 90%);
    z-index: 102;
}
.fingerprint.overlay {
    z-index: 103;
    stroke: #FEFEFE;
    opacity: .149;
}
.content {
    position: relative;
    box-sizing: border-box;
    color: white;
    padding: 18px;
}
@media (min-width: 576px) {
    .background {
        height: 315px;
    }
    .content {
        padding: 36px;
    }
}
@media (min-width: 767px) {
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .content {
        min-height: 417px;
        z-index: 100;
        padding: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .hero[data-align-x="left"] .content {
        align-items: flex-start;
        text-align: left;
    }
    .hero[data-align-x="right"] .content {
        align-items: flex-end;
        text-align: right;
    }
    .hero[data-align-y="top"] .content {
        justify-content: flex-start;
    }
    .hero[data-align-y="bottom"] .content {
        justify-content: flex-end;
    }
}
        `;
  }

  constructor() {
    super();
    this.align = '';
    this.background = undefined;
    this.fingerprint = false;
    this.gradient = false;
  }

  renderFingerprint() {
      return html`<div class="fingerprint overlay">${fingerprint}</div>`;
  }

  renderGradient() {
      return html`<div class="gradient overlay"></div>`;
  }

  renderBackgroundImage() {
    return html`
        <div class="background-image">
            <img src="${this.background}" alt="">
        </div>
    `;
  }

  render() {
    const alignment = new Alignment(this.align);
    return html`
        <div class="hero" data-align-x=${alignment.x} data-align-y=${alignment.y}>
            <div class="background" role="presentation">
                ${this.fingerprint ? this.renderFingerprint(): ''}
                ${this.gradient ? this.renderGradient(): ''}
                ${this.background ? this.renderBackgroundImage() : ''}
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </div>
        `;
  }
}

customElements.define('il-hero', Hero);
