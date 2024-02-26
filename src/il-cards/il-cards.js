import {LitElement, html, css} from "lit";
import "./il-cards.css";

export class CardsComponent extends LitElement {
  static properties = {
    columns: {type: Number}
  }

  constructor() {
    super();
    this.columns = 3;
  }

  static styles = css`
    :host {
      display: block;
    }
    .cards {
      display: grid;
      grid-gap: 1.25rem;
    }
    .cards.columns-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    .cards.columns-4 {
      grid-template-columns: repeat(4, 1fr);
      font-size: .85rem;
    }
  `

  render() {
    return html`
      <div class="cards columns-${this.columns}">
        <slot></slot>
      </div>`
  }
}

customElements.define('il-cards', CardsComponent);