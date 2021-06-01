import {LitElement, html, css} from 'lit-element';

class UnitWordmark extends LitElement {

    static get properties() {
        return {
            width: {attribute: false},
            height: {attribute: false}
        };

    }

    static get styles() {
        return css`
:host {
    display: block;
    position: relative;
}
.wordmark {
    padding: 0 0 0 50px;
    font-family: var(--il-source-sans);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
div.block-i {
    display: block;
    position: absolute;
    height: 43px;
    width: 30px;
    left: 0;
    top: 50%;
    margin-top: -21px;
}
div.block-i a {
    display: block;
    text-decoration: none;
}
div.block-i a:focus, div.block-i a:hover  {
    outline: var(--il-dotted-focus-outline);
    outline-color: var(--il-orange);
}
svg.block-i {
    display: block;
}
.block-i__outline {
    fill: var(--il-blue);
}
.block-i__fill {
    fill: var(--il-orange);
}
.wordmark.wide {
    min-height: 43px;
    padding-left: 50px;
    margin-bottom: 10px;
}
.wordmark.tall .block-i {
    top: 10px;
    margin-top: 0;
}
.wordmark ::slotted(*) {
    font-size: 16px;
}
.wordmark ::slotted(*:last-child) {
    font-size: 32px;
}

@media (min-width: 768px) {
.wordmark.wide, .wordmark.narrow {
    padding-left: 70px;
    min-height: 43px;
}
.wordmark.wide::after, .wordmark.narrow::after {
    background-color: var(--il-blue);
    content: "";
    height: 100%;
    left: 50px;
    position: absolute;
    top: 0;
    width: 1px;
}
}
        `;
    }

    constructor() {
        super();
        this.shape = 'regular';
        window.addEventListener('load', this.handleResize.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    getHeight() {
        const h = this.offsetHeight;
        if (h > 72) {
            return 'tall';
        }
        return 'short';
    }

    getWidth() {
        const w = this.offsetWidth;
        if (w < 300) {
            return 'narrow';
        }
        return 'wide';
    }

    handleResize(evt) {
        const width = this.getWidth();
        if (width !== this.width) {
            this.width = width;
        }
        const height = this.getHeight();
        if (height !== this.height) {
            this.height = height;
        }
    }

    renderBlockI() {
        return html`
<svg class="block-i" mlns="http://www.w3.org/2000/svg" viewBox="0 0 54.2 78.2">
    <title>Block I logo</title>
    <path class="block-i__outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1h12zM42.1 60.2h9v15H3v-15h9c1.7 0 3-1.3 3-3V21.1c0-1.7-1.3-3-3-3H3V3h48.1v15h-9c-1.7 0-3 1.3-3 3v36.1c0 1.7 1.4 3.1 3 3.1z"/>
    <path class="block-i__fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3z"/>
</svg>
        `;
    }

    render() {
        return html`
<div class="wordmark ${this.width} ${this.height}">
    <div class="block-i">
        <a href="https://illinois.edu">${this.renderBlockI()}</a>
    </div>
    <div class="name">
        <slot></slot>
    </div>
</div>
        `;
    }
}

customElements.define('il-unit-wordmark', UnitWordmark);
