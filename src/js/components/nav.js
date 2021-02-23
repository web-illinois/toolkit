import {LitElement, html, css} from 'lit-element';

class Navigation extends LitElement {
    render() {
        return html`<nav>
            <ul>
                <slot></slot>
            </ul>
        </nav>`
    }
}

customElements.define('il-nav', Navigation);
