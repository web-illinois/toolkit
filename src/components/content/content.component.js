import {LitElement, html, css} from 'lit';
import "./css/index.scss";

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
