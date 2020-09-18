import {LitElement, html, css} from 'lit-element';
import './wordmark';
import './unit-wordmark';

class Header extends LitElement {
    static get properties() {
        return {
            name: {type: String},
            wordmark: {attribute: false}
        };

    }

    static get styles() {
        return css`
.header {
    border-top: 7px solid var(--il-orange);
}
.campus {
    background-color: var(--il-cloud);
    border-bottom: 1px solid var(--il-cloud-1);
}
.header.default-wordmark .campus {
    display: none;
}
.site {
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
}
.campus, .site {
    background-color: white;
    padding-left: 20px;
    padding-right: 20px;
}
@media (min-width: 600px) {
    .campus, .site {
        padding-left: 50px;
        padding-right: 50px;
    }
}
@media (min-width: 1300px) {
    .campus, .site {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }
}
.campus a {
    display: inline-block;
    padding: 4px 0;
    font: 700 10px/1.1em var(--il-montserrat);
    color: inherit;
    text-decoration: none;
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
}
.campus a:focus {
    outline: var(--il-focus-outline);
}
@media (min-width: 480px) {
    .campus a {
        font-size: 14px;
        letter-spacing: 1px;
    }
}
.campus span {
    white-space: nowrap;
}
.site > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.site > div > * {
    flex: 1 1 auto;
}
.identity {
    padding-right: 20px;
}
.content {
    float: right;
}
        `;
    }

    constructor() {
        super();
        this.wordmark = 'default';
        document.addEventListener('DOMContentLoaded', () => {
            this.wordmark = this.hasCustomWordmark() ? 'custom' : 'default';
        });
    }

    getCampusWordmark() {
        return html`
<div class="campus">
        <div>
            <span>University of Illinois</span>
            <span>Urbana&hyphen;Champaign</span>
        </div>
</div>
        `;
    }

    hasCustomWordmark() {
        return this.querySelector('[slot="wordmark"]') !== null;
    }

    render() {
        return html`
<div class="header ${this.wordmark}-wordmark">
    <div class="campus">
        <a href="https://illinois.edu/">
            <span>University of Illinois</span>
            <span>Urbana&hyphen;Champaign</span>
        </a>
    </div>
    <div class="site">
        <div>
            <div class="identity">
                <slot name="wordmark">
                    <il-wordmark></il-wordmark>
                </slot>
            </div>
            <div>
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</div>
        `;
    }
}

customElements.define('il-header', Header);
