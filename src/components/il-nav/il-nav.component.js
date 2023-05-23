import { LitElement, html } from 'lit';
import Link from './link';
import styles from './il-nav.css';
import "./il-nav.scss";

class Navigation extends LitElement {
  static get properties() {
    return {
      label: { type: String }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.label = "Main menu";
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  // Event handlers

  handleContentLoaded(evt) {
    this.initializeContents();
    const observer = new MutationObserver(this.handleMutation.bind(this));
    observer.observe(this, { attributes: false, childList: true, subtree: true });
  }

  handleMutation(evt) {

  }

  handleSectionToggle(evt) {
    this.toggleSection(evt.target);
  }

  // Instance methods

  collapseSection(section) {
    section.collapse();
    this.setSectionSize(section, 'collapsed');
  }

  expandSection(section) {
    section.expand();
    this.setSectionSize(section, 'expanded');
  }

  getSectionSize(section) {
    return section.getAttribute('data-il-nav-size', 'collapsed');
  }

  getSections() {
    return this.querySelectorAll('il-nav-section');
  }

  initializeContents() {
    this.getSections().forEach(section => this.initializeSection(section));
  }

  initializeSection(section) {
    if (this.sectionIsExpanded(section)) section.expand();
    section.addEventListener('toggle', this.handleSectionToggle.bind(this));
  }

  sectionIsExpanded(section) {
    return this.getSectionSize(section) === 'expanded';
  }

  setSectionSize(section, size) {
    section.setAttribute('data-il-nav-size', size);
  }

  toggleSection(section) {
    this.sectionIsExpanded(section) ? this.collapseSection(section) : this.expandSection(section);
  }

  // Render

  render() {
    return html`
        <nav aria-label=${this.label}>
          <slot></slot>
        </nav>`
  }
}

customElements.define('il-nav', Navigation);
