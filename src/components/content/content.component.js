import { LitElement, html } from 'lit';
import styles from "./content.css";
import "./content.scss";

class ContentComponent extends LitElement {

    static get styles() {
        return styles;
    }

    render() {
        return html`
<div id="container">
    <div id="content">
        <slot></slot>
    </div>
</div>
    `;
    }
}

customElements.define('il-content', ContentComponent);
