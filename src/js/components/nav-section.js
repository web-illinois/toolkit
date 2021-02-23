import {LitElement, html, css} from 'lit-element';

class NavigationSection extends LitElement {
    static get properties() {
        return {
            href: {type: String, attribute: true},
            label: {type: String, attribute: true}
        };
    }

    render() {
        return html`<li>
            <a href=${this.href}><slot name="label">${this.label}</slot></a>
            <button>Open/Close</button>
            <ul>
                <slot></slot>
            </ul>
        </li>`
    }
}

customElements.define('il-nav-section', NavigationSection);
