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
.main {
    background-color: var(--il-cloud-1);
    color: var(--il-blue);
    padding: 60px 20px;
}
.main > div {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: var(--il-max-width);
    padding: 0 20px;
    width: 100%;

    display: grid;
    grid-gap: 30px;
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
.links {
    grid-area: links;
}
.campus-wordmark {
    width: 235px;
    height: 61px;
    margin-bottom: 60px;
}
.campus-wordmark a {
    display: block;
    text-decoration: none;
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
@supports (font-variation-settings: normal) {
    .site ::slotted(*:first-child) {
        font-weight: normal;
        font-variation-settings: "wght" 700;
    }
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
                    <slot></slot>
                </div>
            </div>
            <div class="links">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</div>
        `;
    }
}

customElements.define('il-footer', Footer);
