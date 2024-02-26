import {LitElement, html, css} from "lit";

export class PatternComponent extends LitElement {

  static properties = {
    type: {type: String}
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      background: var(--il-pattern-background, transparent);
    }
    svg {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      fill: var(--il-pattern-fill, transparent);
    }
  `

  constructor() {
    super();
    this.type = 'ascend';
  }

  renderAscendPattern() {
    return html`<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="ascend" patternUnits="userSpaceOnUse" width="40" height="40">
          <polygon points="36 40 31 40 40 31 40 36 36 40"></polygon>
          <polygon points="36 0 0 36 0 31 31 0 36 0"></polygon>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ascend)"/>
    </svg>`
  }

  renderFinialPattern() {
    return html`<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="finial" patternUnits="userSpaceOnUse" width="60" height="60">
          <path d="M58.6,0H31h-2H1.4H0v1.4V29v2v27.6V60h1.4H29h2h27.6H60v-1.4V31v-2V1.4V0H58.6z M31,1h26.6L31,27.6V1z M29,1v26.6L2.4,1
        H29z M1,2.4L27.6,29H1V2.4z M1,57.6V31h26.6L1,57.6z M29,59H2.4L29,32.4V59z M31,59V32.4L57.6,59H31z M59,57.6L32.4,31H59V57.6z
         M59,29H32.4L59,2.4V29z"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#finial)"/>
    </svg>`
  }

  render() {
    switch (this.type) {
      case 'ascend':
        return this.renderAscendPattern();
      case 'finial':
        return this.renderFinialPattern();
      default:
        return null;
    }
  }
}

customElements.define('il-pattern', PatternComponent)