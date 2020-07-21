import {LitElement, html, css} from 'lit-element';
import './block-i';

class UnitWordmark extends LitElement {
    static get styles() {
        return css`
.wordmark {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    font-family: var(--il-source-sans);
    position: relative;
}
.block-i {
    flex: 0 0 50px;
}
.block-i a {
    display: block;
    text-decoration: none;
}
il-block-i {
    display: block;
    height: 43px;
    width: 30px;
}
.name {
    flex-grow: 1;
}
@media (min-width: 480px) {
    .wordmark {
        min-height: 54px;
    }
    .wordmark::after {
        background-color: var(--il-blue);
        content: "";
        height: 100%;
        left: 54px;
        position: absolute;
        top: 0;
        width: 1px;
    }
    .block-i {
        flex-basis: 70px;
    }
}
        `;
    }

    render() {
        return html`
<div class="wordmark">
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
