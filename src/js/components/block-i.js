import {LitElement, html, css} from 'lit-element';

class BlockI extends LitElement {
    static get styles() {
        return css`
.outline {
    fill: var(--il-blue);
}
.fill {
    fill: var(--il-orange);
}
        `;
    }

    render() {
        return html`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.2 78.2">
    <title>Block I logo</title>
    <path class="outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1h12zM42.1 60.2h9v15H3v-15h9c1.7 0 3-1.3 3-3V21.1c0-1.7-1.3-3-3-3H3V3h48.1v15h-9c-1.7 0-3 1.3-3 3v36.1c0 1.7 1.4 3.1 3 3.1z"/>
    <path class="fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3z"/>
</svg>
        `;
    }
}

customElements.define('il-block-i', BlockI);
