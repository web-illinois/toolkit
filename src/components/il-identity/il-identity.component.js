import {LitElement, html, css} from 'lit';
import './il-identity.css';

class IdentityComponent extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      #identity {
        display: flex;
        flex-direction: column-reverse;
      }
      #identity .primary ::slotted(*) {
        all: initial;
        display: block;
        color: var(--il-blue);
        font: 600 1.75em/1.2em var(--il-font-sans);
      }
      #identity .secondary ::slotted(*) {
        all: initial;
        display: block;
        color: var(--il-blue);
        font: 400 1.25em/1.2em var(--il-font-sans);
      }
    `
  }

  render() {
    return html`
      <div id="identity">
        <div class="primary">
          <slot></slot>
        </div>
        <div class="secondary">
          <slot name="secondary"></slot>
        </div>
      </div>`
  }
}

customElements.define('il-identity', IdentityComponent);
