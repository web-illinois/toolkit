import {LitElement, css, html} from 'lit';
import styles from './il-main-nav.styles';
import "./il-main-nav.css";

export class MainNavigation extends LitElement {

  static styles = styles;

  constructor() {
    super();
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.handleWindowKeypress = this.handleWindowKeypress.bind(this);
    this.handleSectionConnect = this.handleSectionConnect.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowKeypress);
    this.addEventListener('il-nav-section', this.handleSectionConnect);
    this.initializeResizeObserver();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleWindowKeypress);
  }

  arrangeSections() {

  }

  collapseSection(section) {
    this.expandSection(section.getParentSection());
  }

  collapseAllSections() {
    this.getSections().forEach(section => this.collapseSection(section));
  }

  expandSection(section) {
    this.getSections().forEach(s => {
      const isCurrent = section === s;
      s.expanded = s.contains(section);
      s.setAttribute('data-expanded', s.expanded ? 'true' : 'false');
      s.setAttribute('data-current', isCurrent ? 'true' : 'false');
      if (s.expanded) s.setDirection();
    });
  }

  getContentRect() {
    return this.querySelector('ul').getBoundingClientRect();
  }

  getSections() {
    return this.querySelectorAll('il-nav-section, il-nav-section-with-link');
  }

  getTopLevelSections() {
    return Object.values(this.getSections()).filter(section => section.isTopLevel());
  }

  handleResize() {
    const navSize = this.getContentRect();
    this.getTopLevelSections().forEach(section => {
      const size = section.getBoundingClientRect();
      const spaceToLeft = size.x - navSize.x;
      const spaceToRight = navSize.width - spaceToLeft - size.width;
    })
  }

  handleSectionConnect(evt) {
    evt.stopPropagation();
    this.initializeSection(evt.target);
  }

  handleSectionToggle(evt) {
    const section = evt.target;
    section.expanded ? this.collapseSection(section) : this.expandSection(section);
  }

  handleWindowClick(evt) {
    if (!this.contains(evt.target)) this.collapseAllSections();
  }

  handleWindowKeypress(evt) {
    if (evt.key === 'Escape') {
      this.collapseAllSections();
    }
  }

  initializeResizeObserver() {
    this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
    this.resizeObserver.observe(this);
  }

  initializeSection(elem) {
    //elem.setAttribute('data-level', elem.getLevel());
    elem.setDataAttributes();
    if (!elem.hasAttribute('data-current')) {
      elem.setAttribute('data-current', 'false');
    }
    elem.addEventListener('toggle', this.handleSectionToggle.bind(this));
    if (this.sectionIsExpanded(elem)) {
      elem.expanded = true;
    }
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