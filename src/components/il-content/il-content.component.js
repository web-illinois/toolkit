import {LitElement, html, css} from 'lit';
import "./il-content.css";

class ContentComponent extends LitElement {

    static get properties() {
        return {
          linkedby: { default: false, type: String, attribute: true }
        };
      }

      assignClickableState() {
        if (this.linkedby && this.linkedby != '') {
          let anchor = this.getLinkElement();
          if (anchor != null) {
            anchor.addEventListener("focus", (event) => { this.setHighlight(); });
            anchor.addEventListener("blur", (event) => { this.removeHighlight(); });
          }
        }
      }

    static get styles() {
        return css`
          :host {
            display: block;
          }
          div {
            display: var(--il-content--display);
            flex-flow: column nowrap;
            height: 100%;
          }`
    }

    static get highlightAttribute() {
      return 'data-il-content-highlight';
    }

     getLinkElement() {
       return document.getElementById(this.linkedby);
     }

     _click(e) {
       this.getLinkElement().click();
     }

     setHighlight() {
       return this.setAttribute(ContentComponent.highlightAttribute, true);
     }

     removeHighlight() {
       return this.removeAttribute(ContentComponent.highlightAttribute);
     }

     _highlight(e) {
       this.setHighlight();
       this.getLinkElement().focus();
     }

     _tonedown(e) {
       this.removeHighlight();
       this.getLinkElement().blur();
     }

    render() {
        this.assignClickableState();
        if (this.linkedby && this.linkedby != '') {
            return html`
            <div @click="${this._click}" @mouseover="${this._highlight}" @mouseout="${this._tonedown}">
                <slot></slot>
            </div>`;
        } else {
            return html`
            <div>
                <slot></slot>
            </div>`;
        }      
    }
}

customElements.define('il-content', ContentComponent);
