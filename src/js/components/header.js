import {LitElement, html, css} from 'lit-element';
import './wordmark';
import './unit-wordmark';

class Header extends LitElement {
    static get styles() {
        return css`
.header {
    border-top: 7px solid var(--il-orange);
    background-color: white;
    color: var(--il-blue);
}
.site {
    padding-top: 20px;
    padding-bottom: 20px;
}
.campus, .site {
    background-color: white;
    padding-left: var(--il-content-margin);
    padding-right: var(--il-content-margin);
}
.campus > div, .site > div {
    max-width: var(--il-content-max-width);
    margin-left: auto;
    margin-right: auto;
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

    render() {
        return html`
<div class="header">
    <div class="campus">
        <div>
            <a href="https://illinois.edu/">
                <span>University of Illinois</span>
                <span>Urbana&hyphen;Champaign</span>
            </a>
        </div>
    </div>
    <div class="site">
        <div>
            <div class="identity">
                <slot name="wordmark"></slot>
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
