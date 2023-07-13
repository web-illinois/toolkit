import { LitElement, html } from 'lit';
import styles from './il-tabs.styles';
import "./il-tabs.css";

class TabComponent extends LitElement {
  static get compactSizePixelWidth() {
    return 768;
  }

  // Static methods

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      compact: { default: false, type: Boolean, attribute: false, reflect: true }
    };
  }

  // Constructor

  constructor() {
    super();
    this.handleMutation = this.handleMutation.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    document.addEventListener('DOMContentLoaded', this.handleDocumentLoaded.bind(this));
  }

  // Component lifecycle

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasContainerSupport()) {
      this.addResizeListeners();
    }
    this.addMutationObserver();
  }

  disconnectedCallback() {
    if (!this.hasContainerSupport()) {
      this.removeResizeListeners();
    }
    super.disconnectedCallback();
  }

  // Event handlers

  handleDocumentLoaded() {
    this.initializeTabs();
    if (!this.hasActiveTab()) {
      this.setActiveTab(this.getFirstTab());
    }
  }

  handleMutation(evt) {
    this.initializeTabs();
  }

  handleResize(evt) {
    this.classList[this.isCompact() ? 'add' : 'remove']('il-compact');
  }

  handleTabClick(evt) {
    this.setActiveTab(evt.currentTarget);
  }

  // Object methods

  addMutationObserver() {
    const observer = new MutationObserver(this.handleMutation);
    observer.observe(this, { attributes: false, childList: true, subtree: true });
  }

  addResizeListeners() {
    window.addEventListener('load', this.handleResize.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  getAllTabs() {
    return this.querySelectorAll('*[role="tab"]');
  }

  getFirstTab() {
    return this.querySelector('*[role="tab"]');
  }

  getTabPanel(tab) {
    return document.getElementById(tab.getAttribute('aria-controls'));
  }

  hasActiveTab() {
    return this.querySelector('*[role="tab"][aria-selected="true"]')
  }

  hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  initializeTab(tab) {
    if (!this.tabIsInitialized(tab)) {
      tab.setAttribute('data-il-initialized', '1');
      tab.addEventListener('click', this.handleTabClick);
    }
  }

  initializeTabs() {
    this.getAllTabs().forEach(tab => this.initializeTab(tab));
  }

  isCompact() {
    return this.offsetWidth < TabComponent.compactSizePixelWidth
  }

  removeResizeListeners() {
    window.removeEventListener('load', this.handleResize.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  setActiveTab(activeTab) {
    console.debug(activeTab);
    this.getAllTabs().forEach(tab => {
      (tab === activeTab) ? this.setTabAsActive(tab) : this.setTabAsInactive(tab)
    });
  }

  setTabAsActive(tab) {
    tab.setAttribute('aria-selected', 'true');
    this.getTabPanel(tab).setAttribute('data-il-tab-visible', '1');
  }

  setTabAsInactive(tab) {
    tab.setAttribute('aria-selected', 'false');
    this.getTabPanel(tab).setAttribute('data-il-tab-visible', '0');
  }

  tabIsInitialized(tab) {
    return tab.hasAttribute('data-il-initialized');
  }

  // Render

  render() {
    return html`
        <div id="container">
            <div id="tablist" role="tablist">
                <slot name="tabs"></slot>
            </div>
            <div id="tabpanels">
                <slot></slot>
            </div>
        </div>`;
  }
}

customElements.define('il-tabs', TabComponent);
