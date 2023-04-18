import { LitElement, html } from 'lit';
import styles from './image-gallery.css';
import Debugger from '../../debug';

class ImageGalleryComponent extends LitElement {

    static get styles() {
        return styles;
      }

    render() {
        return html`
        <ul class="image-gallery">
            <slot></slot>
        </ul>`;

    }
}

customElements.define('il-image-gallery', ImageGalleryComponent);