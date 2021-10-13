import { LitElement, html, css } from 'lit';

class CallToAction extends LitElement {

  static get properties() {
    return {
      alignment: { type: String, attribute: true },
      background: { type: String, attribute: true },
      width: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
    .il-calltoaction {
      display: flex;
      align-items: center;
      padding: 2.813rem 0;
      max-width: var(--il-content-max-width);
      margin: var(--il-call-to-action-margin);
    }
    .il-calltoaction.gradient {
      color: white;
      background: linear-gradient(180deg, var(--il-industrial-blue) 0%, var(--il-blue) 100%);
    }
    .il-calltoaction.orange {
      color: white;
      background: var(--il-orange);
    }
    .il-calltoaction.orangegradient {
        color: white;
        background: linear-gradient(180deg, var(--il-orange) 0%, var(--il-altgeld) 100%);
    }
    .il-calltoaction.solid {
        color: white;
        background: var(--il-blue);
    }
    .il-calltoaction .il-calltoaction-body {
      padding-left: 50px;
    }
    .il-calltoaction .il-calltoaction-icon {
      padding-left: 100px;
      min-width: 96px;
    }
    .il-calltoaction .il-calltoaction-body.center {
      text-align: center;
    }
    .il-calltoaction .il-calltoaction-body.right {
      text-align: right;
    }
    @media only screen and (max-width: 792px) {
      .il-calltoaction {
        display: block;
        padding: 1.875rem;
      }
      .il-calltoaction .il-calltoaction-body, .il-calltoaction .il-calltoaction-icon {
        padding-left: 0;
      }
    }`;
  }

  constructor() {
    super();
    this.alignment = '';
    this.background = '';
    this.width = '';
  }


  render() {
    var contentClass = (this.background == 'solid' || this.background == 'blue') ? 'solid' : this.background == 'white' ? '' : this.background == 'orange' ? 'orange' : this.background == 'orangegradient' ? 'orangegradient' : 'gradient';
    var alignmentClass = this.alignment == 'left' ? '' : this.alignment;
    let widthStyle = this.width == '' ? '' : `width: ${this.width};`;
    
    return html`
        <div class="il-calltoaction ${contentClass}" style="${widthStyle}">
            <div class="il-calltoaction-icon ${alignmentClass}"><slot name="icon"></slot></div>
            <div class="il-calltoaction-body ${alignmentClass}"><slot></slot></div>
        </div>
        `;
  }
}

customElements.define('il-call-to-action', CallToAction);
