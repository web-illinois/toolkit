import {LitElement, html, css} from 'lit-element';

class NavigationLink extends LitElement {
    static get properties() {
        return {
            href: {type: String, attribute: true},
            label: {type: String, attribute: true}
        };
    }

    render() {
        return html`<li>
            <a href=${this.href}><slot>${this.label}</slot></a>
        </li>`
    }
}

customElements.define('il-nav-link', NavigationLink);
