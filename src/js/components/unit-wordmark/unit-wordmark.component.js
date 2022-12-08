import {LitElement, html} from 'lit';

class UnitWordmark extends LitElement {

  render() {
    return html`
      <div class="unit">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('il-unit-wordmark', UnitWordmark);
