import { LitElement, html, css } from 'lit';

class CallToAction extends LitElement {

  static get styles() {
    return css`
    .il-calltoaction {
      display: flex;
      align-items: center;
      padding: 3.75rem 0 4.688rem 0;
      margin: var(--il-call-to-action-margin);
      color: var(--il-text-color);
      background: var(--il-background-color);
      width: var(--il-call-to-action-width);
    }
    .il-calltoaction.center {
      align-items: start;
    }
    .il-calltoaction .il-calltoaction-body {
      padding-left: 50px;
    }
    .il-calltoaction .il-calltoaction-icon {
      min-width: 96px;
    }
    .il-calltoaction .il-calltoaction-padding {
      flex: 1 1 auto;
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
  }

  render() {
    let alignmentClass = getComputedStyle(this).getPropertyValue('text-align').trim();
    
    return html`
        <div class="il-calltoaction ${alignmentClass}">
            <div class="il-calltoaction-padding"></div>
            <div class="il-calltoaction-icon ${alignmentClass}"><slot name="icon"></slot></div>
            <div class="il-calltoaction-body ${alignmentClass}"><slot></slot></div>
            <div class="il-calltoaction-padding"></div>
        </div>
        `;
  }
}

customElements.define('il-call-to-action', CallToAction);
