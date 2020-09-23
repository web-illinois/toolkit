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

.main, .parent-unit, .links {
    padding-left: var(--il-content-margin);
    padding-right: var(--il-content-margin);
}
.main > div, .parent-unit ::slotted(*), .links ::slotted(*) {
    max-width: var(--il-content-max-width);
    margin-left: auto;
    margin-right: auto;
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
    grid-gap: 60px var(--il-content-margin);
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
.parent-unit, links {
    padding-left: var(--il-content-margin);
    padding-right: var(--il-content-margin);
}
.parent-unit ::slotted(*), links ::slotted(*) {
    max-width: var(--il-content-max-width);
    margin: 0 auto;
}
.parent-unit {
    background-color: var(--il-orange);
}
.links {
    background-color: white;
}
.parent-unit ::slotted(*) {
    padding-top: 12px;
    padding-bottom: 12px;
    font: bold 22px var(--il-montserrat);
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
}
.links ::slotted(*) {
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
