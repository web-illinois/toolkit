import { LitElement, html } from 'lit';
import styles from './il-nav.styles';
import Cursor from './cursor';
import "./il-nav.css";

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
  }

  handleLinkKeypress(evt) {
    const cursor = new Cursor(this);
    cursor.handleKeydown(evt);
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

  getSectionLevel(section) {
    let level = 1, parent = section.parentElement;
    while (parent.closest('il-nav-section')) {
      level++;
      parent = parent.closest('il-nav-section').parentElement;
    }
    return level;
  }

  getSectionParent(section) {
    return section.parentElement.closest('il-nav-section');
  }

  getSectionSize(section) {
    return section.getAttribute('data-il-nav-size', 'collapsed');
  }

  getSections() {
    return this.querySelectorAll('il-nav-section');
  }

  initializeContents() {
    this.getSections().forEach(section => this.initializeSection(section));
    this.querySelectorAll('a').forEach(link => {
      link.addEventListener('keydown', this.handleLinkKeypress.bind(this));
    })
  }

  initializeSection(section) {
    section.setAttribute('data-il-nav-level', this.getSectionLevel(section));
    if (this.sectionCanExpand(section)) {
      section.enable();
      section.setAttribute('data-il-nav-enabled', 'true');
      if (this.sectionIsExpanded(section)) section.expand();
      section.addEventListener('toggle', this.handleSectionToggle.bind(this));
    }
  }

  isAccordionMode() {
    return this.classList.contains('il-nav-accordion');
  }

  isBarMode() {
    return this.classList.contains('il-nav-bar');
  }

  sectionCanExpand(section) {
    return this.isAccordionMode() || this.isBarMode();
  }

  sectionIsExpanded(section) {
    return this.getSectionSize(section) === 'expanded';
  }

  setCurrentSection(currentSection) {
    this.getSections().forEach(section => {
      section.setAttribute('data-il-nav-current', section === currentSection ? 'true' : 'false');
      (currentSection && section.contains(currentSection)) ? this.expandSection(section) : this.collapseSection(section);
    });
  }

  setSectionSize(section, size) {
    section.setAttribute('data-il-nav-size', size);
  }

  toggleSection(section) {
    this.setCurrentSection(!this.sectionIsExpanded(section) ? section : this.getSectionParent(section));
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
