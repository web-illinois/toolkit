import { LitElement, html } from 'lit';
import styles from './gallery-item.css';
import Debugger from '../../debug';

class GalleryItemComponent extends LitElement {

    static get styles() {
        return styles;
      }

    static get properties() {
        return {
            href: {type: String, attribute: true},
        };
      }

    constructor() {
        super();
        this.href = '';
    }

    render() {
        return html`
        <li class="gallery-item">
        <a href="${this.href}">
            <div class="gallery-image-frame">
            <slot></slot>
            </div>
            <div class="gallery-image-title">
            <slot name="title"></slot>
            </div>
            <div class="gallery-image-description">
            <slot name="caption"></slot>
            </div>
        </li>`;
    }
}

customElements.define('il-gallery-item', GalleryItemComponent);