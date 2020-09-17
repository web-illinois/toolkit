import { LitElement, html, css } from 'lit-element';
import './wordmark';

class Footer extends LitElement {
    static get styles() {
        return css`
.footer {
    font-size: 18px;
    line-height: 1.5em;
    font-family: var(--il-source-sans);
}

.main, .parent-unit ::slotted(*), .links ::slotted(*) {
    padding-left: 20px;
    padding-right: 20px;
}
@media (min-width: 600px) {
    .main, .parent-unit ::slotted(*), .links ::slotted(*) {
        padding-left: 50px;
        padding-right: 50px;
    }
}
@media (min-width: 1300px) {
    .main, .parent-unit ::slotted(*), .links ::slotted(*) {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }
}


.main {
    background-color: var(--il-cloud-1);
    color: var(--il-blue);
    padding-top: 60px;
    padding-bottom: 60px;
}

.main > div {
    box-sizing: border-box;
    display: grid;
    grid-gap: 50px;
}
@media (max-width: 599px) {
    .main > div {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: "info" "links";
    }
}
@media (min-width: 600px) {
    .main > div {
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "info links";
    }
}
.info {
    grid-area: info;
}
.campus-wordmark {
    width: 100%;
    max-width: 235px;
    height: 61px;
    margin-bottom: 60px;
}
.campus-wordmark a {
    display: block;
    text-decoration: none;
}
.campus-wordmark a:focus {
    outline: var(--il-focus-outline);
}
.social {
    margin-bottom: 40px;
}
.site ::slotted(p) {
    margin: 0;
    padding: 0;
}
.site ::slotted(*:first-child) {
    font-weight: 700;
}
.parent-unit ::slotted(*) {
    background-color: var(--il-orange);
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    font: bold 18px var(--il-montserrat);
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
}
.links ::slotted(*) {
    background-color: white;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
}
        `;
    }

    render() {
        return html`
<div class="footer">
    <div class="main">
        <div>
            <div class="info">
                <div class="campus-wordmark">
                    <a href="https://illinois.edu/"><il-wordmark></il-wordmark></a>
                </div>
                <div class="social">
                    <slot name="social"></slot>
                </div>
                <div class="site">
                    <slot name="contact"></slot>
                </div>
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
    <div class="parent-unit">
        <slot name="parent-unit"></slot>
    </div>
    <div class="links">
        <slot name="links"></slot>
    </div>
</div>
</div>
        `;
    }
}

customElements.define('il-footer', Footer);
