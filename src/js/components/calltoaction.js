import {LitElement, html, css} from 'lit';

class CallToAction extends LitElement {

  static get properties() {
    return {
        alignment: {type: String, attribute: true},
        background: {type: String, attribute: true},
        width: {type: String, attribute: true},
    };
  }

  static get styles() {
    return css`
    .il-calltoaction {
      display: flex;
      align-items: center;
      padding: 2.813rem 0;
      width: 100%;
      max-width: var(--il-content-max-width);
      margin: auto;
    }
    .il-calltoaction .il-calltoaction-body {
      max-width: 50rem;
      margin: auto;
    }
    @media only screen and (max-width: 792px) {
      .il-calltoaction {
        display: block;
        padding: 1.875rem;
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

    var contentClass = (this.background == 'solid' || this.background == 'blue') ? 'content solid' : this.background == 'white' ? 'content' : this.background == 'orange' ? 'content orange' : this.background == 'orangegradient' ? 'content orangegradient' : 'content gradient';
    return html`
        <div class="il-calltoaction ${contentClass}">
            <div class="il-calltoaction-icon"><slot name="icon"></slot></div>
            <div class="il-calltoaction-body"><slot></slot></div>
        </div>
        `;
  }
}

customElements.define('il-call-to-action', CallToAction);
