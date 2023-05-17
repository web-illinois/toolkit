import { LitElement, html, css } from 'lit';
import styles from './statistic.css';
import "./statistic.scss";
class Statistic extends LitElement {

  static get properties() {
    return {
      startAnimation: { type: String, attribute: true },
      animate: { type: Boolean, attribute: true },
      originalStat: { type: String, attribute: true },
      idInfo: { type: String }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.animated = false;
    this.startAnimation = '';
    this.originalStat = '';
    this.idInfo = '';
  }

  addOriginalStat(e) {
    if (this.originalStat == '') {
      this.originalStat = e.target.assignedNodes({ flatten: true })[0].innerHTML;
    }
  }

  firstUpdated() {
    this.shadowRoot.querySelector('slot[name="stat"]').addEventListener('slotchange', (e) => this.addOriginalStat(e));
  }

  render() {
    this.idInfo = 'statistic-' + (((1 + Math.random()) * 0x10000000) | 0);
    return html`
    <p class="il-statistic" id='${this.idInfo}'>
        <span class="text intro"><slot name="top"></slot></span>
        <span class="stat"><slot name="stat"></span></slot>
        <span class="text"><slot></slot></span>
        <span class="text source"><slot name="source"></slot></span>
    </p>`;
  }
}

customElements.define('il-statistic', Statistic);
