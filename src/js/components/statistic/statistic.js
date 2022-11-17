import { LitElement, html, css } from 'lit';

class Statistic extends LitElement {

  static get properties() {
    return {
      height: { type: String, attribute: true },
      startAnimation: { type: String, attribute: true },
      animate: { type: Boolean, attribute: true },
      originalStat: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
    p.il-statistic {
      text-align: center;
      padding: var(--il-statistic-padding);
      background: var(--il-background-color);
      margin: var(--il-statistic-margin);
      color: var(--il-statistic-text-color);
      width: var(--il-statistic-width);
    }
    p.il-statistic span.text {
      font-size: var(--il-statistic-font-size);
      line-height: var(--il-statistic-line-height);
    }
    p.il-statistic span.text.intro {
      padding-bottom: var(--il-statistic-intro-padding-bottom);
      display: inline-block;
    }
    p.il-statistic span.stat {
      display: block;
      font-weight: 700;
      margin: var(--il-statistic-heading-margin);
      color: var(--il-statistic-heading-color);
      padding: var(--il-statistic-stat-padding);
      font-size: var(--il-statistic-stat-font-size);
      line-height: var(--il-statistic-stat-line-height);
    }
    p.il-statistic span.stat em {
      font-style: normal;
    }
    p.il-statistic span.source {
      display: block;
      margin: var(--il-statistic-source-margin);
      font-size: var(--il-statistic-source-font-size);
      line-height: var(--il-statistic-source-line-height);
      font-style: italic;
    }`;
  }

  constructor() {
    super();
    this.color = '';
    this.background = '';
    this.height = '';
    this.width = '';
    this.animated = false;
    this.idInfo = '';
    this.start = '';
    this.originalStat = '';
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
