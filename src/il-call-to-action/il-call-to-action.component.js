import { LitElement, html, css } from 'lit';
import "./il-call-to-action.css"

class CallToAction extends LitElement {

  static get styles() {
    return css`

      :host {
        display: block;
      }
      #call-to-action {
        padding-top: 3.75em;
        padding-bottom: 4.7em;
        padding-left: var(--il-page--padding-left, 2em);
        padding-right: var(--il-page--padding-right, 2em);
      }

      #container {
        display: grid;
        grid-template-columns: 6em auto;
        grid-gap: 3em;
      }
      #content {
      }
      #icon {
        padding-top: 1.875rem;
      }
      
      @container (max-width: 792px) {
        #container {
          grid-template-columns: auto;
          grid-template-rows: auto auto;
          grid-gap: 1.875em;
        }
      }

    `;
  }

  render() {
    return html`
        <div id="call-to-action">
          <div id="container">
            <div id="icon">
              <slot name="icon"></slot>
            </div>
            <div id="content">
              <slot></slot>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('il-call-to-action', CallToAction);
