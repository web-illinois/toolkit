import { LitElement, html, css } from 'lit';

class CallToAction extends LitElement {

  static get properties() {
    return {
      alignment: { type: String, attribute: true },
      width: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
    .il-calltoaction {
      display: flex;
      align-items: center;
      padding: 3.75rem 0 4.688rem 0;
      max-width: var(--il-content-max-width);
      margin: var(--il-call-to-action-margin);
      color: var(--il-text-color);
      background: var(--il-background-color);
    }
    .il-calltoaction.center {
      align-items: start;
    }
    .il-calltoaction .il-calltoaction-body {
      padding-left: 50px;
    }
    .il-calltoaction .il-calltoaction-icon {
      padding-left: 100px;
      min-width: 96px;
    }
    .il-calltoaction .il-calltoaction-icon.center {
      margin-top: 1.875rem;
    }
    .il-calltoaction .il-calltoaction-body.center {
      text-align: center;
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
    this.width = '';
  }

  render() {
    var alignmentClass = this.alignment == 'left' ? '' : this.alignment;
    let widthStyle = this.width == '' ? '' : `width: ${this.width};`;
    
    return html`
        <div class="il-calltoaction ${alignmentClass}" style="${widthStyle}">
            <div class="il-calltoaction-icon ${alignmentClass}"><slot name="icon"></slot></div>
            <div class="il-calltoaction-body ${alignmentClass}"><slot></slot></div>
        </div>
        `;
  }
}

customElements.define('il-call-to-action', CallToAction);
