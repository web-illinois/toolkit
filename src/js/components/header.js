import {LitElement, html, css} from 'lit-element';
import Navigation from './navigation';
import './unit-wordmark';

class Header extends LitElement {
    static get properties() {
        return {
            view: {type: String, reflect: true},
            menuVisible: {type: Boolean, attribute: false}
        }
    }

    static get styles() {
        return css`
.header {
    font-family: var(--il-source-sans);
}
.campus {
    text-transform: uppercase;
}

.header--full .header__main-outer {
    border-top: 7px solid var(--il-orange);
    background-color: white;
    padding: 0 var(--il-content-margin);
}
.header--full .header__main-inner {
    margin: 0 auto;
    max-width: var(--il-content-max-width);
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: "campus links" "wordmark search";
    align-items: center;
}
.header--full .campus {
    grid-area: campus;
    justify-self: left;
}
.header--full .links {
    grid-area: links;
    justify-self: right;
}
.header--full .wordmark {
    grid-area: wordmark;
    justify-self: left;
}
.header--full .search {
    grid-area: search;
    justify-self: right;
}

.header--compact .header__main {
    border-top: 7px solid var(--il-orange);
    background-color: white;
    padding: 0 var(--il-content-margin);
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
}
.header--compact .menu {
    background-color: var(--il-cloud-1);
    padding: 1em;
    display: none;
}
.header--compact.header--menu-visible .menu {
    display: block;
}
        `;
    }

    constructor() {
        super();
        this.view = 'full';
        this.menuVisible = false;
        window.addEventListener('resize', this.handleWindowResize.bind(this));
        window.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
        this.handleWindowResize();
    }

    getView() {
        return this.view;
    }

    isCompactView() {
        return this.getView() === 'compact';
    }

    isFullView() {
        return this.getView() === 'full';
    }

    setView(view) {
        this.view = view;
    }

    // Event handlers

    handleContentLoaded(evt) {
        const nav = document.querySelector('*[slot="navigation"] ul');
        if (nav) {
            this.navigation = new Navigation(nav);
        }
    }

    handleMenuButtonClick(evt) {
        this.menuVisible = !this.menuVisible;
    }

    handleWindowResize(evt) {
        const m = window.matchMedia('(max-width: 600px)');
        this.setView(m.matches ? 'compact' : 'full');
    }

    // Rendering

    renderCompactView() {
        return html`
<div class="header header--compact ${this.menuVisible ? 'header--menu-visible' : ''}">
    <div class="header__main">
        <div class="wordmark">
            <slot name="wordmark"></slot>
        </div>
        <div class="menu-button">
            <button aria-controls="menu" aria-expanded=${this.menuVisible ? 'true' : 'false'} @click=${this.handleMenuButtonClick}>Menu</button>
        </div>
    </div>
    <div class="menu">
        <div class="search">
            <slot name="search"></slot>
        </div>
        <div class="navigation">
            <slot name="navigation"></slot>
        </div>
        <div class="links">
            <slot name="links"></slot>
        </div>
    </div>
</div>
        `;
    }

    renderFullView() {
        return html`
<div class="header header--full">
    <div class="header__main-outer">
        <div class="header__main-inner">
            <div class="campus">
                University of Illinois Urbana-Champaign
            </div>
            <div class="wordmark">
                <slot name="wordmark"></slot>
            </div>
            <div class="links">
                <slot name="links"></slot>
            </div>
            <div class="search">
                <slot name="search"></slot>
            </div>
        </div>
    </div>
    <div class="navigation">
        <slot name="navigation"></slot>
    </div>
</div>
        `;
    }

    render() {
        return this.isFullView() ? this.renderFullView() : this.renderCompactView();
    }
}

customElements.define('il-header', Header);
