import {LitElement, html, css} from "lit";

export class StatisticComponent extends LitElement {

  static styles = css`
    :host {
      display: block;
      width: 100%;
      container-type: inline-size;
    }
    div {
      font-size: 1.25rem;
    }
  @container (min-width: 50rem) {
    div {
      font-size: 2rem;
    }
  }
  `

  render() {
    return html`
      <div>
        <slot></slot>
      </div>`
  }
}

customElements.define('il-stat', StatisticComponent);