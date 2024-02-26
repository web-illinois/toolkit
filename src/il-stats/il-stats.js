import {LitElement, html, css} from "lit";

export class StatisticsComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4rem;
      justify-content: center;
      align-items: center;
    }
  `

  render() {
    return html`
      <div>
        <slot></slot>
      </div>`
  }
}

customElements.define('il-stats', StatisticsComponent);