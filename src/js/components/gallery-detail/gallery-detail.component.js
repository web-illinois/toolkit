import { LitElement, html } from 'lit';
import styles from './gallery-detail.css';

class GalleryDetailComponent extends LitElement {

    static get styles() {
        return styles;
      }

    static get properties() {
        return {
            href: {type: String, attribute: true},
            home: {type: String, attribute: true},
            previous: {type: String, attribute: true},
            next: {type: String, attribute: true}
        };
      }

    constructor() {
        super();
        this.home = '';
        this.previous = '';
        this.next = '';
    }

    renderHome() { 
        return this.home == '' ? html`` : html`<a href="${this.home}" class="gallery-detail-back">${this.renderChevron()} Back to Gallery</a>`;
    }

    renderNavigation() { 
        return this.previous == '' && this.next == '' ? html`` : 
        this.next == '' ? html`<nav class="gallery-detail-navigation" aria-label="Gallery Navigation">
            <a href="${this.previous}" class="gallery-detail-previous" aria-label="Previous Item">${this.renderChevron()}</a></nav>` :
        this.previous == '' ? html`<nav class="gallery-detail-navigation" aria-label="Gallery Navigation">
            <a href="${this.next}" class="gallery-detail-next" aria-label="Next Item">${this.renderChevron()}</a></nav>` :
        html`<nav class="gallery-detail-navigation" aria-label="Gallery Navigation">
            <a href="${this.previous}" class="gallery-detail-previous" aria-label="Previous Item">${this.renderChevron()}</a>
            <a href="${this.next}" class="gallery-detail-next" aria-label="Next Item">${this.renderChevron()}</a></nav>`;
    }

    renderChevron() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
        </svg>`;
      }

    render() {
        return html`<div class="gallery-detail">
        ${this.renderHome()}
        <div class="gallery-detail-text"><slot name="caption"></slot></div>
        <div class="gallery-detail-image"><slot></slot></div>
        ${this.renderNavigation()}
        </div>`;
    }
}

customElements.define('il-gallery-detail', GalleryDetailComponent);