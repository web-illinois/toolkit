import {LitElement, html, css} from 'lit-element';
import Alignment from '../lib/alignment';

class Hero extends LitElement {

  static get properties() {
    return {
      background: {type: String, attribute: true},
      align: {type: String, attribute: true}
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
.background img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
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
    this.background = undefined;
    this.align = '';
  }

  renderBackground() {
    return html`
        <div class="background" role="presentation">
            <img src="${this.background}" alt="">
        </div>
    `;
  }

  render() {
    const alignment = new Alignment(this.align);
    return html`
        <div class="hero" data-align-x=${alignment.x} data-align-y=${alignment.y}>
            ${this.background && this.renderBackground()}
            <div class="content">
                <slot></slot>
            </div>
        </div>
        `;
  }
}

customElements.define('il-hero', Hero);
