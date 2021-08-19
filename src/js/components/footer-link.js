import { LitElement, html, css } from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

class Link extends LitElement {

    static get styles() {
        return css`
        a {
            color: white;
            display: block;
            padding: 5px;
            font: 1rem var(--il-source-sans);
            white-space: nowrap;
        }
        a:hover, a:focus {
            outline: 2px dotted white;
            color: white;
        }
        button {
            padding: 4px 10px;
            background: var(--il-alma-mater);
            border: solid 2px white;
            color: white;
            position: relative;
            display: inline-block;
            border-radius: 5px;
            font: 1rem var(--il-source-sans);
            cursor: pointer;
        }
        button:hover, button:focus {
            background: white;
            color: var(--il-alma-mater);
        }
        `;
    }

    static get properties() {
        return {
            type: {type: String, attribute: true}
        };
    }

    constructor() {
        super();
        this.type = '';
      }
    

    render() {
        let info = { 
            privacy: "<a href='https://www.vpaa.uillinois.edu/resources/web_privacy'>Privacy Policy</a>",
            accessibility: "<a href='https://illinois.edu/resources/website/accessibility.html'>Accessibility</a>",
            copyright: "<a href='https://illinois.edu/resources/website/copyright.html'>Copyright &#169; 2021</a>",
            cookies: "<button id='ot-sdk-btn' class='ot-sdk-show-settings'>About Cookies</button>"
        };
        return Object.keys(info).includes(this.type) ? html`${unsafeHTML(info[this.type])}` : '';
    }
}

customElements.define('il-footer-link', Link);
