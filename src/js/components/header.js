import {LitElement, html, css} from 'lit-element';
import './unit-wordmark';

class Header extends LitElement {
    static get properties() {
        return {
            name: { type: String }
        }
    }

    static get styles() {
        return css`
.campus {
    background-color: var(--il-cloud);
    border-top: 7px solid var(--il-orange);
}
.site {
    background-color: white;   
}
.campus > div, .site > div {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: var(--il-max-width);
    padding: 0 20px;
    width: 100%;
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
.site .identity {
    flex-grow: 1;
    font-family: var(--il-source-sans);
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    padding: 15px 0 20px;
}
.site .menu {
    padding-left: 20px;
}
.site .identity ::slotted(*) {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
}
@supports (font-variation-settings: normal) {
    .site .identity {
        font-weight: normal;
        font-variation-settings: "wght" 600;
    }
}
@media (min-width: 360px) {
    .campus > div {
        font-size: 12px;
    }
}
@media (min-width: 400px) {
    .campus > div {
        letter-spacing: 1.75px;
    }
}
@media (min-width: 600px) {
    .site > div {
        display: block;
    }
    .site .identity {
        font-size: 24px;
        line-height: 26px;
    }
    .site .menu {
        padding-left: 0;
    }
}
        `;
    }

    constructor() {
        super();
        window.addEventListener('DOMContentLoaded', () => {
            if (this.hasMenu()) {
                this.getMenu().addEventListener('toggle', this.handleMenuToggle.bind(this));
            }
            if (this.hasSearch()) {
                this.getSearch().addEventListener('toggle', this.handleSearchToggle.bind(this));
            }
        });
    }

    getMenu() {
        return this.querySelector('il-menubar');
    }

    getSearch() {
        return this.querySelector('il-search');
    }

    handleMenuToggle(evt) {
        if (evt.target.expanded && this.searchIsExpanded()) {
            this.getSearch().collapse();
        }
    }

    handleSearchToggle(evt) {
        if (evt.target.expanded && this.menuIsExpanded()) {
            this.getMenu().collapse();
        }
    }

    hasMenu() {
        return this.getMenu() !== null;
    }

    hasSearch() {
        return this.getSearch() !== null;
    }

    menuIsExpanded() {
        return this.hasMenu() && this.getMenu().expanded;
    }

    searchIsExpanded() {
        return this.hasSearch() && this.getSearch().expanded;
    }

    render() {
        return html`
<div class="header">
    <div class="campus">
        <div>
            <span>University of Illinois</span>
            <span>Urbana&hyphen;Champaign</span>
        </div>
    </div>
    <div class="site">
        <div>
            <div class="identity">
                <slot></slot>
            </div>
        </div>
    </div>
</div>
        `;
    }
}

customElements.define('il-header', Header);
