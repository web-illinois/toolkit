import {LitElement, html, css} from 'lit-element';
import './block-i';

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
.block-i {
    display: block;
    position: absolute;
    height: 43px;
    width: 30px;
    left: 0;
    top: 50%;
    margin-top: -21px;
}
.block-i a {
    display: block;
    text-decoration: none;
}
.block-i a:focus {
    outline: var(--il-dotted-focus-outline);
}

.wordmark.narrow {
    font-size: 14px;
}
.wordmark.wide {
    min-height: 43px;
    padding-left: 75px;
}
.wordmark.wide::after {
    background-color: var(--il-blue);
    content: "";
    height: 100%;
    left: 52px;
    position: absolute;
    top: 0;
    width: 1px;
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
.wordmark.narrow ::slotted(*) {
    font-size: 14px;
}
.wordmark.narrow ::slotted(*:last-child) {
    font-size: 22px;
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

    render() {
        return html`
<div class="wordmark ${this.width} ${this.height}">
    <div class="block-i">
        <a href="https://illinois.edu"><il-block-i></il-block-i></a>
    </div>
    <div class="name">
        <slot></slot>
    </div>
</div>
        `;
    }
}

customElements.define('il-unit-wordmark', UnitWordmark);
