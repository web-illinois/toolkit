import { LitElement, html } from 'lit';
import styles from './image-gallery-item.css';
import Debugger from '../../debug';

class ImageGalleryItemComponent extends LitElement {

    static get styles() {
        return styles;
      }

    static get properties() {
        return {
            href: {type: String, attribute: true},
            gallery: {type: String, attribute: true},
            previous: {type: String, attribute: true},
            next: {type: String, attribute: true}
        };
      }

    constructor() {
        super();
        this.href = '';
        this.gallery = '';
        this.previous = '';
        this.next = '';
    }

    renderGallery() { 
        return this.gallery == '' ? html`` : html`<a href="${this.gallery}" class="image-gallery-detail-back">${this.renderChevron()} Back to Gallery</a>`;
    }

    renderNavigation() { 
        return this.previous == '' && this.next == '' ? html`` : 
        this.next == '' ? html`<nav class="image-gallery-detail-navigation" aria-label="Gallery Navigation">
            <a href="${this.previous}" class="image-gallery-detail-previous" aria-label="Previous Item">${this.renderChevron()}</a></nav>` :
        this.previous == '' ? html`<nav class="image-gallery-detail-navigation" aria-label="Gallery Navigation">
            <a href="${this.next}" class="image-gallery-detail-next" aria-label="Next Item">${this.renderChevron()}</a></nav>` :
        html`<nav class="image-gallery-detail-navigation" aria-label="Gallery Navigation">
            <a href="${this.previous}" class="image-gallery-detail-previous" aria-label="Previous Item">${this.renderChevron()}</a>
            <a href="${this.next}" class="image-gallery-detail-next" aria-label="Next Item">${this.renderChevron()}</a></nav>`;
    }

    renderChevron() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
        </svg>`;
      }

    render() {
        if (this.href == '') {
            return html`<div class="image-gallery-detail">
            ${this.renderGallery()}
            <div class="image-gallery-detail-text"><slot></slot></div>
            <div class="image-gallery-detail-image"><slot name="image"></slot></div>
            ${this.renderNavigation()}
            </div>`;
        }
        return html`
        <li class="image-gallery-item">
        <a href="${this.href}">
            <div class="image-gallery-image-frame">
            <slot name="image"></slot>
            </div>
            <div class="image-gallery-image-title">
            <slot name="title"></slot>
            </div>
            <div class="image-gallery-image-description">
            <slot></slot>
            </div>
        </li>`;
    }
}

customElements.define('il-image-gallery-item', ImageGalleryItemComponent); 