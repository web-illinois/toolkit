import {LitElement, html, css} from 'lit';

class Icon extends LitElement {

  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-size: 48px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        letter-spacing: 0;
        speak: none;
        -webkit-font-feature-settings: "liga";
        -moz-font-feature-settings: "liga=1";
        -moz-font-feature-settings: "liga";
        -ms-font-feature-settings: "liga" 1;
        font-feature-settings: "liga";
        -webkit-font-variant-ligatures: discretionary-ligatures;
        font-variant-ligatures: discretionary-ligatures;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        text-rendering: optimizeLegibility;
        font-family: var(--il-icons-solid);
      }
    `
  }
  render() {
    return html`
        <span class="icon"><slot></slot></span>
    `;
  }
}

customElements.define('il-icon', Icon);