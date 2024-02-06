import {LitElement, css, html} from 'lit';

export class MainNavigation extends LitElement {

  constructor() {
    super();
    this.handleWindowKeypress = this.handleWindowKeypress.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.getSections().forEach(this.initializeSection.bind(this));
    window.addEventListener('keydown', this.handleWindowKeypress);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.addEventListener('keydown', this.handleWindowKeypress);
  }

  collapseSection(section) {
    section.expanded = false;
    section.setAttribute('data-expanded', false);
  }

  collapseAllSections() {
    this.getSections().forEach(section => this.collapseSection(section));
  }

  expandSection(section) {
    console.debug(section);
    this.getSections().forEach(s => {
      s.expanded = s.contains(section);
      s.setAttribute('data-expanded', s.expanded ? 'true' : 'false');
    });
  }

  getSections() {
    return this.querySelectorAll('il-nav-section');
  }

  handleSectionToggle(evt) {
    const section = evt.target;
    section.expanded ? this.collapseSection(section) : this.expandSection(section);
  }

  handleWindowKeypress(evt) {
    if (evt.key === 'Escape') this.collapseAllSections();
  }

  initializeSection(elem) {
    elem.setAttribute('data-connected', 'true');
    elem.addEventListener('toggle', this.handleSectionToggle.bind(this));
    if (this.sectionIsExpanded(elem)) this.expandSection(elem);
  }

  sectionIsExpanded(section) {
    return section.hasAttribute('data-expanded') && section.getAttribute('data-expanded') === 'true';
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('il-main-nav', MainNavigation);
