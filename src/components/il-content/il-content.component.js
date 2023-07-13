import {LitElement, html, css} from 'lit';
import "./il-content.css";

class ContentComponent extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
          }
          div {
            max-width: var(--il-content--max-width, none);
            margin: auto;
            display: var(--il-content--display, block);
            flex-flow: column nowrap;
            flex-grow: 1;
          }`
    }

    render() {
        return html`
        <div>
            <slot></slot>
        </div>`;
    }
}

customElements.define('il-content', ContentComponent);
