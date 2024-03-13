import {LitElement, html} from "lit";
import './il-panels.css'

export class PanelsComponent extends LitElement {
  constructor() {
    super();
    this._building = false;
    this._type = undefined;
    this.handleHeadingClick = this.handleHeadingClick.bind(this);
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    this.arrangeContents();
    this.initializeResizeObserver();
    this.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(evt) {
    const heading = evt.target.closest('div[data-il-role="heading"]');
    if (!heading) return;
    this.handleHeadingClick(heading);
  }

  setActivePanel(panel) {
  }

  getPanelForHeading(heading) {
    return document.getElementById(heading.getAttribute('aria-controls'));
  }

  getType() {
    if (this.classList.contains('il-accordion')) return 'accordion';
    if (this.classList.contains('il-tabs')) return 'tabs';
    if (this.classList.contains('il-vertical-tabs')) return 'vertical-tabs';
    return undefined;
  }

  getWidth() {
    return this.getBoundingClientRect().width;
  }

  handleContentLoaded(evt) {
    this.arrangeContents();
  }

  handleHeadingClick(heading) {
    if (this.isAccordion()) {
      const expanded = heading.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
      heading.closest('div[data-il-construct="accordion-section"]').setAttribute('data-il-expanded', expanded);
      heading.setAttribute('aria-expanded', expanded);
    }
    if (this.isTabs()) {
      heading.closest('div[data-il-construct="tabs-headers"]').querySelectorAll('div[data-il-role="heading"]').forEach(h => {
        const isSelected = h === heading;
        h.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        const panel = this.getPanelForHeading(h);
        panel.setAttribute('data-il-selected', isSelected ? 'true' : 'false');
      });
    }
  }

  handleRefreshClick() {
    console.debug('redraw panels');
    this.arrangeContents();
  }

  handleResize() {
    const width = this.getWidth();
    console.debug(width);
  }

  isAccordion() {
    return this.getType() === 'accordion';
  }

  isTabs() {
    return this.getType() === 'tabs' || this.getType() === 'vertical-tabs';
  }

  arrangeContents() {
    if (this._building) return;
    const type = this.getType();
    if (this._type !== type) {
      this._building = true;
      const sections = this.extractSections();
      this.clearConstructedElements();
      if (type === 'accordion') {
        this.buildAccordion(sections);
      }
      if (type === 'tabs' || type === 'vertical-tabs') {
        this.buildTabs(sections);
      }
      this._type = type;
      this._building = false;
    }
  }

  buildAccordion(sections) {
    sections.forEach(elements => {
      const section = document.createElement('div');
      section.setAttribute('data-il-construct', 'accordion-section');
      section.setAttribute('data-il-expanded', 'false');

      elements.heading.setAttribute('aria-expanded', 'false');
      elements.heading.setAttribute('data-il-role', 'heading');
      //elements.heading.addEventListener('click', this.handleHeadingClick);
      section.appendChild(elements.heading);

      elements.panel.setAttribute('role', 'region');
      elements.panel.setAttribute('data-il-role', 'panel');
      section.appendChild(elements.panel);

      this.appendChild(section);
    })
    this.setAttribute('data-il-panels-view', 'accordion');
  }

  buildTabs(sections) {
    const tabs = document.createElement('div');
    tabs.setAttribute('data-il-construct', 'tabs-headers');
    tabs.setAttribute('role', 'tablist');

    const panels = document.createElement('div');
    panels.setAttribute('data-il-construct', 'tabs-panels');

    sections.forEach(elements => {
      elements.heading.setAttribute('aria-selected', 'false');
      elements.heading.setAttribute('data-il-role', 'heading');
      //elements.heading.addEventListener('click', this.handleHeadingClick);
      tabs.appendChild(elements.heading);

      elements.panel.removeAttribute('role');
      elements.panel.setAttribute('data-il-role', 'panel');
      panels.appendChild(elements.panel);
    })
    this.appendChild(tabs);
    this.appendChild(panels);
    this.setAttribute('data-il-panels-view', 'tabs');
  }

  clearConstructedElements() {
    this.querySelectorAll('*[data-il-construct]').forEach(elem => elem.remove());
  }

  extractSections() {
    const sections = [];
    this.querySelectorAll('*[aria-controls]').forEach(heading => {
      const panel = document.getElementById(heading.getAttribute('aria-controls'));
      if (!panel || panel.getAttribute('aria-labelledby') !== heading.id) return;
      heading.remove();
      heading.removeEventListener('click', this.handleHeadingClick);
      heading.removeAttribute('data-il-role');
      panel.remove();
      panel.removeAttribute('data-il-role');
      sections.push({heading, panel});
    })
    return sections;
  }

  initializeResizeObserver() {
    const obs = new ResizeObserver(this.handleResize.bind(this));
    obs.observe(this);
  }

  render() {
    return html`<div>
      <slot></slot>
      <button type="button" @click="${this.handleRefreshClick.bind(this)}">Refresh</button>
    </div>`
  }
}

customElements.define('il-panels', PanelsComponent);