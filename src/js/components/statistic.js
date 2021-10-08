import { LitElement, html, css } from 'lit';

class Statistic extends LitElement {

  static get properties() {
    return {
      width: { type: String, attribute: true },
      src: { type: String, attribute: true },
      size: { type: String, attribute: true },
      color: { type: String, attribute: true },
      height: { type: String, attribute: true },
      background: { type: String, attribute: true },
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
      background: var(--il-cloud-1);
      margin: var(--il-statistic-margin);
      color: var(--il-blue);
    }
    p.il-statistic.back-white {
      background: white;
    }
    p.il-statistic.back-transparent {
      background: rgba(0,0,0,0);
    }
    p.il-statistic.back-shaded {
      color: white;
      background: rgba(0,0,0,.25);
    }
    p.il-statistic.back-orange {
      color: white;
      background: var(--il-orange);
    }
    p.il-statistic.back-gradient {
      color: white;
      background: linear-gradient(180deg, var(--il-industrial-blue) 0%, var(--il-blue) 100%);
    }
    p.il-statistic.back-orangegradient {
      color: white;
      background: linear-gradient(180deg, var(--il-orange) 0%, var(--il-altgeld) 100%);
    }
    p.il-statistic.back-blue {
      color: white;
      background: var(--il-blue);
    }
    p.il-statistic.white {
      color: white;
    }
    p.il-statistic.black {
      color: black;
    }
    p.il-statistic.orange {
      color: var(--il-orange);
    }
    p.il-statistic span.stat, p.il-statistic span.text {
      display: block;
      font-size: 1.125rem;
      line-height: 1.4375rem;
    }
    p.il-statistic span.stat {
      font-weight: 600;
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

  attributeChangedCallback(name, oldval, newval) {
    if (name == 'animate') {
      if (this.idInfo != '') {
        const element = this.shadowRoot.getElementById(this.idInfo);
        let counter = this.startAnimation;
        const endInteger = parseInt(this.originalStat.replace('#', ''));
        const startingText = this.originalStat.includes('#') ? '#' : '';
        const endingText = this.originalStat.includes('%') ? '%' : '';
        const plus = counter < endInteger;
        const endText = this.originalStat;
        let duration = 5000 / Math.abs((counter - endInteger));
        if (duration > 100) {
          duration = 100;
        }

        let intervalPointer = setInterval(function () {
          if (plus) {
            if (counter < endInteger) {
              element.querySelector('.stat').innerHTML = startingText + counter + endingText;
              counter++;
            } else {
              element.querySelector('.stat').innerHTML = endText;
              clearInterval(intervalPointer);
            }
          } else {
            if (counter > endInteger) {
              element.querySelector('.stat').innerHTML = startingText + counter + endingText;
              counter--;
            } else {
              element.querySelector('.stat').innerHTML = endText;
              clearInterval(intervalPointer);
            }
          }
        }, duration);
      }
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  addOriginalStat(e) {
    if (this.originalStat == '') {
      this.originalStat = e.target.assignedNodes({ flatten: true })[0].innerHTML;
    }
  }

  firstUpdated() {
    if (this.src !== '') {
      fetch(this.src, { method: 'GET', headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" } })
        .then(res => res.json())
        .then(data => {
          var element = this.shadowRoot.getElementById(this.idInfo);
          element.querySelector('.stat').innerHTML = data.stat;
          if (data.heading !== undefined && data.heading != '') {
            element.querySelector('.stat').innerHTML = data.heading;
          }
          if (data.body !== undefined && data.body != '') {
            element.querySelector('.after').innerHTML = data.body;
          }
          if (data.top !== undefined && data.top != '') {
            element.querySelector('.before').innerHTML = data.top;
          }
          if (data.source !== undefined && data.source != '') {
            element.querySelector('.source').innerHTML = data.source;
          }
          this.originalStat = element.querySelector('.stat').innerHTML;
        });
    } else {
      this.shadowRoot.querySelector('slot[name="stat"]').addEventListener('slotchange', (e) => this.addOriginalStat(e));
    }
  }

  render() {
    this.idInfo = 'statistic-' + (((1 + Math.random()) * 0x10000000) | 0);
    let widthStyle = this.width == '' ? '' : `width: ${this.width};`;
    let sizeClass = this.size == 'medium' ? '' : this.size;
    let colorClass = this.colorClass == 'blue' ? '' : this.color;
    let backgroundClass = this.background == 'gray' || this.background == '' ? '' : 'back-' + this.background;

    if (this.src === '') {
      return html`
      <p class="il-statistic ${sizeClass} ${backgroundClass} ${colorClass}" id='${this.idInfo}' style='${widthStyle}'>
          <span class="text"><slot name="top"></slot></span>
          <span class="stat"><slot name="stat"></span></slot>
          <span class="text"><slot></slot></span>
          <span class="text source"><slot name="source"></slot></span>
      </p>
      `;
    }
    return html`<p class="il-statistic ${sizeClass} ${backgroundClass} ${colorClass}" id='${this.idInfo}' style='${widthStyle}'>
    <span class="text before"></span>
    <span class="stat"></span>
    <span class="text after"></span>
    <span class="text source"></span>
    </p>`
  }
}

customElements.define('il-statistic', Statistic);