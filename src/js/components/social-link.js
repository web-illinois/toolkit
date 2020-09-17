import {LitElement, html, css} from 'lit-element';

class SocialLink extends LitElement {
    static get properties() {
        return {
            href: { type: String },
            service: { type: String },
            username: { type: String }
        };
    }

    static get styles() {
        return css`
a {
    display: inline-block;
    position: relative;
}
a:focus {
    outline: 4px dotted var(--il-arches-blue);
}
a.with-icon {
    height: 30px;
    overflow: hidden;
    width: 30px;
}
a.without-icon {
    text-decoration: none;
}
a.without-icon .label {
    display: block;
    background-color: var(--il-blue);
    color: var(--il-cloud);
    font-size: 16px;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 15px;
    white-space: nowrap;
}
.icon {
    display: block;
    height: 30px;
    width: 30px;
}
svg {
    display: block;
    fill: var(--il-blue);
    height: 100%;
    width: 100%;
}
a.with-icon:hover svg, a.with-icon:focus svg {
    fill: var(--il-industrial-blue);
}
a.without-icon:hover .label, a.without-icon:focus .label {
    background-color: var(--il-industrial-blue);
}
        `;
    }

    static get facebookIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M25.63.32A25.31 25.31 0 00.32 25.63a25.31 25.31 0 0025.31 25.31 25.31 25.31 0 0025.31-25.31A25.31 25.31 0 0025.63.32zm7.06 15.37h-3.33c-1.18 0-1.43.48-1.43 1.7v2.94h4.76l-.46 5.17h-4.3v15.43h-6.16V25.56h-3.2v-5.23h3.2v-4.12c0-3.86 2.07-5.88 6.65-5.88h4.27z"/></svg>`;
    }

    static get instagramIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M36.45,17.44a4.36,4.36,0,0,0-1-1.6,4.26,4.26,0,0,0-1.6-1,7.93,7.93,0,0,0-2.58-.48c-1.46-.06-1.9-.08-5.61-.08s-4.15,0-5.61.08a7.87,7.87,0,0,0-2.58.48,4.6,4.6,0,0,0-2.64,2.64A7.87,7.87,0,0,0,14.32,20c-.06,1.46-.08,1.9-.08,5.61s0,4.15.08,5.61a7.93,7.93,0,0,0,.48,2.58,4.26,4.26,0,0,0,1,1.6,4.36,4.36,0,0,0,1.6,1,7.61,7.61,0,0,0,2.58.48c1.46.07,1.9.08,5.61.08s4.15,0,5.61-.08a7.67,7.67,0,0,0,2.58-.48,4.49,4.49,0,0,0,2.63-2.63,7.67,7.67,0,0,0,.48-2.58c.07-1.46.08-1.9.08-5.61s0-4.15-.08-5.61A7.61,7.61,0,0,0,36.45,17.44ZM25.63,32.76a7.13,7.13,0,1,1,7.13-7.13A7.13,7.13,0,0,1,25.63,32.76ZM33,19.88a1.67,1.67,0,1,1,1.67-1.67A1.67,1.67,0,0,1,33,19.88Z"/><path d="M25.63,21a4.63,4.63,0,1,0,4.63,4.63A4.63,4.63,0,0,0,25.63,21Z"/><path d="M25.63.3A25.33,25.33,0,0,0,.3,25.63h0a25.33,25.33,0,0,0,50.66,0h0A25.33,25.33,0,0,0,25.63.3Zm13.8,31.05a10.19,10.19,0,0,1-.64,3.38,7.08,7.08,0,0,1-4.06,4.06,10.19,10.19,0,0,1-3.38.64c-1.48.07-2,.09-5.72.09s-4.25,0-5.73-.09a10.07,10.07,0,0,1-3.37-.64,7.08,7.08,0,0,1-4.06-4.06,10.42,10.42,0,0,1-.65-3.38c-.06-1.48-.08-2-.08-5.72s0-4.25.08-5.73a10.3,10.3,0,0,1,.65-3.37,7.08,7.08,0,0,1,4.06-4.06,10.3,10.3,0,0,1,3.37-.65c1.48-.06,2-.08,5.73-.08s4.24,0,5.72.08a10.42,10.42,0,0,1,3.38.65,7.08,7.08,0,0,1,4.06,4.06,10.07,10.07,0,0,1,.64,3.37c.07,1.48.09,2,.09,5.73S39.5,29.87,39.43,31.35Z"/></svg>`;
    }

    static get linkedInIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M25.63,0A25.62,25.62,0,0,0,0,25.63H0a25.63,25.63,0,0,0,51.26,0h0A25.63,25.63,0,0,0,25.63,0ZM19.31,37.05H14V19.92h5.3ZM16.63,17.67a3.16,3.16,0,1,1,3.14-3.16A3.15,3.15,0,0,1,16.63,17.67ZM39.19,37.05H33.91v-9c0-2.47-.94-3.85-2.89-3.85-2.12,0-3.23,1.44-3.23,3.85v9H22.7V19.92h5.09v2.3A6,6,0,0,1,33,19.39c3.64,0,6.24,2.22,6.24,6.81Z"/></svg>`;
    }

    static get pinterestIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M25.63.74A24.89,24.89,0,0,0,.74,25.63h0a24.89,24.89,0,0,0,49.78,0h0A24.89,24.89,0,0,0,25.63.74Zm2.28,31.47a4.89,4.89,0,0,1-4.15-2.11s-1,3.91-1.19,4.66a18.17,18.17,0,0,1-3.07,5.56.22.22,0,0,1-.4-.1,18.91,18.91,0,0,1,0-6.45c.33-1.38,2.18-9.25,2.18-9.25a6.59,6.59,0,0,1-.54-2.69c0-2.52,1.46-4.39,3.28-4.39A2.27,2.27,0,0,1,26.36,20c0,1.56-1,3.88-1.5,6a2.62,2.62,0,0,0,2.68,3.27c3.21,0,5.38-4.13,5.38-9,0-3.72-2.51-6.5-7.06-6.5a8,8,0,0,0-8.36,8.13,4.87,4.87,0,0,0,1.12,3.33.83.83,0,0,1,.24.94c-.08.32-.27,1.07-.35,1.37a.58.58,0,0,1-.85.42c-2.37-1-3.47-3.56-3.47-6.49,0-4.82,4.06-10.6,12.13-10.6,6.48,0,10.75,4.69,10.75,9.73C37.07,27.24,33.37,32.21,27.91,32.21Z"/></svg>`;
    }

    static get rssIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg>`;
    }

    static get snapchatIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M25.63.59h0a25,25,0,0,0-25,25h0a25,25,0,0,0,25,25h0a25,25,0,0,0,25-25h0A25,25,0,0,0,25.63.59ZM40.32,33.76h0a1.87,1.87,0,0,1-.86.58h0a9.25,9.25,0,0,1-2.13.6h0a.82.82,0,0,0-.55.17,3.79,3.79,0,0,0-.51,1.32.3.3,0,0,1,0,.08c0-.08,0,0,0,0a.32.32,0,0,1-.09.19.45.45,0,0,1-.31.17h-.08A17.32,17.32,0,0,0,33,36.8h0a4.76,4.76,0,0,0-1.27.15h0a36.67,36.67,0,0,0-3.17,1.86h0a3.74,3.74,0,0,1-1.63.56h0a17.72,17.72,0,0,1-2.07,0h0a4.94,4.94,0,0,1-2.45-.9h0a12.32,12.32,0,0,0-3.07-1.66A7.84,7.84,0,0,0,16,37h0a.73.73,0,0,1-.5,0,.39.39,0,0,1-.28-.25c-.14-.46-.19-.88-.31-1.25-.09-.21-.13-.33-.14-.36a8.68,8.68,0,0,0-1.29-.32h0a8.11,8.11,0,0,1-2.07-.72h0a1.15,1.15,0,0,1-.34-.27.69.69,0,0,1-.13-.62l0-.09a1.27,1.27,0,0,1,.8-.46l0,0a7.11,7.11,0,0,0,2.24-1A9.5,9.5,0,0,0,17,28.14h0a2.41,2.41,0,0,0,.35-1.53,1.41,1.41,0,0,0-.89-.86,9.94,9.94,0,0,1-2-.87l0,0c-.08-.06-.2-.13-.34-.25a.91.91,0,0,1-.32-.53h0a.22.22,0,0,1,0-.08,1,1,0,0,1,.53-.78s0,0,0,0h0a1.19,1.19,0,0,1,1-.22s0,0,0,0c.36.1.68.22,1,.27h0a3.46,3.46,0,0,0,1.28,0s0,0,0-.05a19.11,19.11,0,0,0-.07-2.6,9.24,9.24,0,0,1,.41-3.95h0a8.13,8.13,0,0,1,2.48-3.24,8.31,8.31,0,0,1,5.1-1.62c.44,0,.88,0,1.34,0a7.85,7.85,0,0,1,3.73,1.33,7.24,7.24,0,0,1,3,4.52h0A18.81,18.81,0,0,1,33.7,21h0c0,.7-.07,1.38-.05,2h0c0,.11,0,.2,0,.24a2.28,2.28,0,0,0,1.08,0h0a6,6,0,0,0,.95-.28h0a1.26,1.26,0,0,1,1.07.1h0a1.4,1.4,0,0,1,.63.59h0a.7.7,0,0,1,0,.47.34.34,0,0,1,0,.12,1.08,1.08,0,0,1-.26.34h0a5.08,5.08,0,0,1-1.8.93h0a2.8,2.8,0,0,0-1.33.84h0a1.16,1.16,0,0,0-.05,1h0a9.19,9.19,0,0,0,1.32,2.31,8.12,8.12,0,0,0,3.86,2.81h0a4.4,4.4,0,0,1,.94.34h0l0,0h0A.61.61,0,0,1,40.32,33.76Z"/></svg>`;
    }

    static get twitterIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M25.63.85A24.79,24.79,0,0,0,.85,25.63h0a24.78,24.78,0,0,0,49.55,0h0A24.78,24.78,0,0,0,25.63.85Zm10.5,19.39a15.41,15.41,0,0,1-23.7,13.68,10.92,10.92,0,0,0,8-2.24,5.43,5.43,0,0,1-5.06-3.76,5.54,5.54,0,0,0,2.44-.09,5.43,5.43,0,0,1-4.34-5.38,5.37,5.37,0,0,0,2.45.67,5.42,5.42,0,0,1-1.67-7.23,15.34,15.34,0,0,0,11.16,5.66,5.42,5.42,0,0,1,9.23-4.94A10.85,10.85,0,0,0,38.1,15.3a5.49,5.49,0,0,1-2.38,3,10.85,10.85,0,0,0,3.11-.85A11.06,11.06,0,0,1,36.13,20.24Z"/></svg>`;
    }

    static get weiboIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M23.42,28.53a.61.61,0,1,0,.6.6A.6.6,0,0,0,23.42,28.53Z"/><path d="M20.58,29.9a2.05,2.05,0,0,0-1.81,1.83,1.59,1.59,0,0,0,1.67,1.37,2,2,0,0,0,1.8-1.82A1.58,1.58,0,0,0,20.58,29.9Z"/><path d="M29.65,25.91A8,8,0,0,0,28,25a11.84,11.84,0,0,0-7.56-.66,10.7,10.7,0,0,0-5.55,3,4.51,4.51,0,0,0,.67,7,11,11,0,0,0,6.29,1.83c.31,0,.62,0,.93,0A11.19,11.19,0,0,0,30.16,33,4.43,4.43,0,0,0,29.65,25.91Zm-3.81,6.7a5.37,5.37,0,0,1-6.34,1.64,3.52,3.52,0,0,1-1.63-5.05,5.06,5.06,0,0,1,4.64-2.52,8.43,8.43,0,0,1,1.23.14A3.63,3.63,0,0,1,25.84,32.61Z"/><path d="M25.63,1.31h0A24.32,24.32,0,0,0,1.31,25.63h0A24.32,24.32,0,0,0,25.63,50h0A24.32,24.32,0,0,0,50,25.63h0A24.32,24.32,0,0,0,25.63,1.31Zm10.45,30.1a9.34,9.34,0,0,1-3.68,3.77,17.65,17.65,0,0,1-9.69,2.45,16.14,16.14,0,0,1-9-2.76A6.05,6.05,0,0,1,11.34,27,17.87,17.87,0,0,1,21,17.51a6.17,6.17,0,0,1,2.34-.41,1.92,1.92,0,0,1,2.1,2.06c0,.36-.05.71-.06,1.07s0,.83,0,1.25a8.63,8.63,0,0,0,1.25-.24,9.54,9.54,0,0,1,3.65-.68c.18,0,.36,0,.53,0a2.17,2.17,0,0,1,2.05,2.8C32.52,25,32.52,25,34,25.68A3.92,3.92,0,0,1,36.08,31.41Zm-3.65-12a1.38,1.38,0,0,1-.65-.07,1.21,1.21,0,0,1-.56-.65,1,1,0,0,1,.38-.76,2,2,0,0,1,1-.26,3.74,3.74,0,0,1,3.76,4.18,2.86,2.86,0,0,1-.21.76.71.71,0,0,1-1,.47c-.26-.12-.43-.48-.58-.76s0-.35,0-.53C34.61,20.23,34,19.53,32.43,19.42Zm7.69,4.24a1,1,0,0,1-1.18.82c-.58-.08-.88-.57-.82-1.31a5,5,0,0,1,.14-.65,5.76,5.76,0,0,0-5.67-6.83c-.4,0-.8.06-1.2,0-.76,0-1.06-.28-1.11-.87a1,1,0,0,1,.92-1.11,10.44,10.44,0,0,1,2.79,0,7.8,7.8,0,0,1,6.53,7.73C40.39,22.18,40.29,22.92,40.12,23.66Z"/></svg>`;
    }

    static get whatsappIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M25.88,14A11.31,11.31,0,0,0,14.6,24.18a10,10,0,0,0-.06,1.09,11.19,11.19,0,0,0,2.16,6.6l-1.41,4.18,4.35-1.39a11.35,11.35,0,0,0,17.57-9.39,8.44,8.44,0,0,0,0-.87A11.3,11.3,0,0,0,25.88,14Zm6.61,15.88a3.29,3.29,0,0,1-2.23,1.56c-.6.06-.6.49-4-.81s-5.47-4.74-5.64-5a7.57,7.57,0,0,1-1.18-2.27,4.21,4.21,0,0,1-.17-1.11,3.62,3.62,0,0,1,1.16-2.74,1.2,1.2,0,0,1,.88-.41c.22,0,.44,0,.63,0s.47-.12.75.54.94,2.27,1,2.44a.57.57,0,0,1,0,.57,3.5,3.5,0,0,1-.2.39l-.12.16c-.17.19-.35.42-.5.57s-.34.34-.15.67a9.88,9.88,0,0,0,1.84,2.27,9.12,9.12,0,0,0,2.66,1.63c.33.16.52.14.71-.09s.83-1,1.05-1.28.44-.27.75-.16,1.92.9,2.26,1.07.54.24.63.37A2.73,2.73,0,0,1,32.49,29.91Z"/><path d="M25.63.6h0a25,25,0,0,0-25,25h0a25,25,0,0,0,25,25h0a25,25,0,0,0,25-25h0A25,25,0,0,0,25.63.6Zm.25,38.05A13.48,13.48,0,0,1,19.37,37L11.9,39.36l2.43-7.18a13.26,13.26,0,0,1-1.93-6.91c0-.19,0-.39,0-.58a13.48,13.48,0,0,1,26.94.24c0,.12,0,.23,0,.34A13.43,13.43,0,0,1,25.88,38.65Z"/></svg>`;
    }

    static get youtubeIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26"><path d="M25.63.67h0a25,25,0,0,0,0,49.92h0a25,25,0,0,0,0-49.92Zm15,32.52A3.93,3.93,0,0,1,37.83,36c-2.44.66-12.2.66-12.2.66s-9.76,0-12.2-.66a3.93,3.93,0,0,1-2.76-2.78A41.27,41.27,0,0,1,10,25.63a41.27,41.27,0,0,1,.65-7.56,3.92,3.92,0,0,1,2.76-2.78c2.44-.66,12.2-.66,12.2-.66s9.76,0,12.2.66a3.92,3.92,0,0,1,2.76,2.78,41.27,41.27,0,0,1,.65,7.56A41.27,41.27,0,0,1,40.59,33.19Z"/><polygon points="22.43 30.27 30.59 25.63 22.43 20.99 22.43 30.27"/></svg>`;
    }

    get icon() {
        return this.iconImage ? html`<span class="icon">${this.iconImage}</span>` : '';
    }

    get iconImage() {
        switch (this.service) {
            case 'facebook':
                return SocialLink.facebookIcon;
            case 'instagram':
                return SocialLink.instagramIcon;
            case 'linkedin':
                return SocialLink.linkedInIcon;
            case 'pinterest':
                return SocialLink.pinterestIcon;
            case 'snapchat':
                return SocialLink.snapchatIcon;
            case 'twitter':
                return SocialLink.twitterIcon;
            case 'weibo':
                return SocialLink.weiboIcon;
            case 'whatsapp':
                return SocialLink.whatsappIcon;
            case 'youtube':
                return SocialLink.youtubeIcon;
            default:
                return undefined;
        }
    }

    get url() {
        return this.href;
    }

    hasIcon() {
        return this.iconImage !== undefined;
    }

    render() {
        return html`
<a href="${this.url}" class="${this.hasIcon() ? 'with-icon' : 'without-icon'}">
    ${this.icon}
    <span class="label"><slot></slot></span>
</a>
        `;
    }
}

customElements.define('il-social-link', SocialLink);
