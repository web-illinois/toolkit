import {LitElement, html, css} from 'lit';
import "./content.css";

class ContentComponent extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
          }`
    }

    render() {
        return html`
            <div>
                <slot></slot>
            </div>`
    }
}

customElements.define('il-content', ContentComponent);
