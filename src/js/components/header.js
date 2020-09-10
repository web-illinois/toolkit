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
}
.header.default-wordmark .campus {
    display: none;
}
.site {
    background-color: white;
    padding: 20px;
}
@media (min-width: 600px) {
    .site {
        padding-left: 50px;
        padding-right: 50px;
    }
}
@media (min-width: 1300px) {
    .site {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }
}
.campus > div {
    padding: 4px 20px;
    font: 700 10px/1em var(--il-montserrat);
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
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
        <div>
            <span>University of Illinois</span>
            <span>Urbana&hyphen;Champaign</span>
        </div>
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
