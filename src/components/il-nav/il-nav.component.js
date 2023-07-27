import { LitElement, html } from 'lit';
import styles from './il-nav.styles';
import Cursor from './cursor';
import "./il-nav.css";

class Navigation extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      type: { type: String, reflect: true }
    };
  }

  static get styles() {
    return styles;
  }

  // Lifecycle

  constructor() {
    super();
    this.label = "Main menu";
    this.type = 'auto';
    this._initialized = false;
    this.handleHeaderCompactChange = this.handleHeaderCompactChange.bind(this);
    this.handleSectionToggle = this.handleSectionToggle.bind(this);
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    this.listenToHeader();
  }

  disconnectedCallback() {
    this.stopListeningToHeader();
    super.disconnectedCallback();
  }

  // Event handlers

  handleContentLoaded(evt) {
    this.initializeContents();
  }

  handleHeaderCompactChange(evt) {
    if (this._initialized) this.enableOrDisableAllSections();
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

  disableSection(section) {
    section.disable();
    section.setAttribute('data-il-nav-enabled', 'false');
    section.expand();
  }

  enableOrDisableAllSections() {
    this.getSections().forEach(section => this.enableOrDisableSection(section));
  }

  enableOrDisableSection(section) {
    this.sectionCanExpand(section) ? this.enableSection(section) : this.disableSection(section);
  }

  enableSection(section) {
    section.enable();
    section.setAttribute('data-il-nav-enabled', 'true');
    this.sectionIsExpanded(section) ? section.expand() : section.collapse();
  }

  expandSection(section) {
    section.expand();
    this.setSectionSize(section, 'expanded');
  }

  getHeader() {
    return this.closest('il-header');
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

  headerIsCompact() {
    return this.getHeader().isCompact();
  }

  initializeContents() {
    if (this._initialized) return;
    this._initialized = true;
    this.initializeSections();
    this.initializeLinks();
  }

  initializeLinks() {
    this.querySelectorAll('a').forEach(link => {
      link.addEventListener('keydown', this.handleLinkKeypress.bind(this));
    })
  }

  initializeSections() {
    this.getSections().forEach(section => this.initializeSection(section));
    this.enableOrDisableAllSections();
  }

  initializeSection(section) {
    section.setAttribute('data-il-nav-level', this.getSectionLevel(section));
    section.addEventListener('toggle', this.handleSectionToggle);
  }

  isAccordionType() {
    if (this.isAutomatic()) {
      return this.isInsideCompactHeaderLinksSlot() || this.isInsideCompactHeaderNavigationSlot();
    }
    return this.type === 'accordion'
  }

  isAutomatic() {
    return this.type === 'auto';
  }

  isBarType() {
    if (this.isAutomatic()) {
      return this.isInsideFullHeaderNavigationSlot();
    }
    return this.type === 'bar';
  }

  isDropdownType() {
    return this.type === 'dropdown';
  }

  isInSlot(name) {
    return this.getAttribute('slot') === name;
  }

  isInsideHeader() {
    return this.getHeader() !== null;
  }

  isInsideCompactHeaderLinksSlot() {
    return this.isInsideHeader() && this.headerIsCompact() && this.isInSlot('links');
  }

  isInsideCompactHeaderNavigationSlot() {
    return this.isInsideHeader() && this.headerIsCompact() && this.isInSlot('navigation');
  }

  isInsideFullHeaderNavigationSlot() {
    return this.isInsideHeader() && !this.headerIsCompact() && this.isInSlot('navigation');
  }

  listenToHeader() {
    if (!this.isInsideHeader()) return;
    this.getHeader().addEventListener('compact', this.handleHeaderCompactChange);
  }

  sectionCanExpand(section) {
    return this.isAccordionType() || this.isBarType() || this.isDropdownType();
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

  stopListeningToHeader() {
    if (!this.isInsideHeader()) return;
    this.getHeader().removeEventListener('compact', this.handleHeaderCompactChange);
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
