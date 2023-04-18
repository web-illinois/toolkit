import { LitElement, html } from 'lit';
import styles from './gallery.css';
import Debugger from '../../debug';

class GalleryComponent extends LitElement {

    static get styles() {
        return styles;
      }

    render() {
        return html`
        <ul class="gallery">
            <slot></slot>
        </ul>`;

    }
}

customElements.define('il-gallery', GalleryComponent);