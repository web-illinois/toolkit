import { LitElement, html, css } from 'lit';

class Statistic extends LitElement {

  static get properties() {
    return {
      width: { type: String, attribute: true },
      src: { type: String, attribute: true },
      size: { type: String, attribute: true },
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
      padding: 30px 20px;
      background: var(--il-background-color);
      margin: var(--il-statistic-margin);
      color: var(--il-heading-color);
    }
    p.il-statistic span.stat, p.il-statistic span.text {
      display: block;
      font-size: 1.125rem;
      line-height: 1.4375rem;
    }
    p.il-statistic span.stat {
      font-weight: 700;
      font-size: 4rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    p.il-statistic.extralarge span.stat {
      font-size: 8.25rem;
    }
    p.il-statistic.large span.stat {
      font-size: 6rem;
    }
    p.il-statistic.small span.stat {
      font-size: 2.1875rem;
    }
    p.il-statistic span.stat em {
      font-style: normal;
    }
    p.il-statistic span.text {
      
    }
    p.il-statistic span.source {
      margin-top: 10px;
      font-size: 1rem;
      line-height: 1.25rem;
      font-style: italic;
    }
    p.il-statistic span.source::before {
      content: "";
      padding-right: 4px;
    }`;
  }

  constructor() {
    super();
    this.src = '';
    this.size = '';
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
    let widthStyle = this.width == '' ? '' : `width: ${this.width};`;
    let sizeClass = this.size == 'medium' ? '' : this.size;

    return html`
    <p class="il-statistic ${sizeClass}" id='${this.idInfo}' style='${widthStyle}'>
        <span class="text"><slot name="top"></slot></span>
        <span class="stat"><slot name="stat"></span></slot>
        <span class="text"><slot></slot></span>
        <span class="text source"><slot name="source"></slot></span>
    </p>`;
  }
}

customElements.define('il-statistic', Statistic);
