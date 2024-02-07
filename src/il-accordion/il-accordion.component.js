import {html, css, LitElement} from 'lit';

export class Accordion extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('il-accordion', Accordion);