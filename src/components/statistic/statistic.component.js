import { LitElement, html, css } from 'lit';
import "./statistic.scss";
class Statistic extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--il-statistic--background-color);
        color: var(--il-statistic--color);
        padding: 1.5em 1.25em 2em;
        text-align: center;
        font: 400 var(--il-statistic--font-size) var(--il-font-sans);
      }
    `;
  }

  render() {
    return html`<div id="statistic"><slot></slot></div>`;
  }
}

customElements.define('il-statistic', Statistic);
