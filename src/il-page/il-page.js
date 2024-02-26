import {LitElement, html, css} from "lit";
import styles from './il-page.styles';
import "./il-page.css";

export class PageComponent extends LitElement {
  static properties = {
    _hasRoomForNavigation: {state: true},
    _shouldShouldPrimaryUnit: {state: true},
    _size: {state: true}
  }

  static styles = styles;

  constructor() {
    super();
    this.updateSize();
  }

  connectedCallback() {
    super.connectedCallback();
    this.initializeResizeObserver();
    this.updateSize();
  }

  updated(_changedProperties) {
    let hasChanged = false;
    super.updated(_changedProperties);
    if (_changedProperties.has('_size')) {
      this.setAttribute('data-columns', this._size);
      hasChanged = true;
    }
    if (hasChanged) this.dispatchResizeEvent();
  }

  dispatchResizeEvent() {
    this.dispatchEvent(new CustomEvent('resize', { detail: this.getResizeEventData() }))
  }

  getPageWidth() {
    return this.offsetWidth || screen.availWidth;
  }

  getResizeEventData() {
    return {
      columns: this._size
    }
  }

  getSizeInColumns() {
    const width = this.getPageWidth();
    switch (true) {
      case width < 360:
        return 2;
      case width < 650:
        return 4;
      case width < 990:
        return 6;
      case width < 1200:
        return 8;
      default:
        return 12;
    }
  }

  initializeResizeObserver() {
    const resizeObserver = new ResizeObserver(this.updateSize.bind(this));
    resizeObserver.observe(this);
  }

  updateSize() {
    this._size = this.getSizeInColumns();
  }

  render() {
    return html`
      <div class="page">
        <header>
          <slot name="header"></slot>
        </header>
        <div class="content-and-footer">
          <main>
            <div class="hero">
              <slot name="hero"></slot>
            </div>
            <div class="content">
              <slot></slot>
            </div>
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `
  }
}

customElements.define('il-page', PageComponent);