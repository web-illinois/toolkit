import { LitElement, html } from 'lit';
import styles from './il-tabs.styles';
import "./il-tabs.css";

class TabComponent extends LitElement {
  static get compactSizePixelWidth() {
    return 768;
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      compact: { default: false, type: Boolean, attribute: true, reflect: true }
    };
  }

  static hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  handleResize(evt) {
    this.compact = this.offsetWidth < TabComponent.compactSizePixelWidth;
  }

   getLinkElement() {
     return document.getElementById(this.linkedby);
   }

  constructor() {
    super();
    if (!TabComponent.hasContainerSupport()) {
      console.debug("Tab: No support for @container detected: using manual resize");
      window.addEventListener('load', this.handleResize.bind(this));
      window.addEventListener('resize', this.handleResize.bind(this));
    }
    let firstItem = true;
    this.getAllTabs().forEach(item => {
      item.addEventListener('keydown', this.keyboard);
      item.addEventListener('click', e => this.setActivePanel(item));
      item.setAttribute('role', 'tab');
      if (firstItem) {
        item.setAttribute('tabindex', 0);
        item.setAttribute('aria-selected', 'true');
        this.setActivePanel(item);
        firstItem = false;
      } else {
        item.setAttribute('tabindex', -1);
      }
    });
  }

  getAllTabs() {
    return Array.from(this.querySelector('*[slot=tabs]').children);
  }

  getAllPanels() {
    return Array.from(this.querySelectorAll('*:not([slot])'));
  }

  setActivePanel(item) {
    let panelId = item.getAttribute("aria-controls");
    let panel = document.getElementById(panelId);
    this.getAllPanels().forEach(panel => { 
      panel.removeAttribute('data-il-tab-visible');
    });
    panel.setAttribute('data-il-tab-visible', true);
    this.getAllTabs().forEach(tab => { 
      tab.setAttribute('tabindex', -1); 
      tab.removeAttribute('aria-selected');
    });
    item.setAttribute('tabindex', 0);
    item.setAttribute('aria-selected', 'true');
  }

  keyboard(event) {
    if (event.code == "ArrowLeft" || event.code == "ArrowUp") {
      if (event.target.previousElementSibling) {
          event.target.previousElementSibling.focus();
      } else {
          event.target.parentElement.lastElementChild.focus();
      }
    } else if (event.code == "ArrowRight" || event.code == "ArrowDown") {
        if (event.target.nextElementSibling) {
            event.target.nextElementSibling.focus();
        } else {
            event.target.parentElement.firstElementChild.focus();
        }
    } else if (event.code == "Enter" || event.code == "Space") {
      event.target.click();
    }
  }

  handlePanelsChange(e) {
    const childNodes = e.target.assignedNodes({flatten: true});
    let firstNode = true;
    childNodes.map((node) => {
        if (node.nodeType == 1) {
            if (firstNode) {
                firstNode = false;
            } else {
                node.style.display = 'none';
            }
        }
    });
  }

  render() {
    return html`
        <div id="container" ?compact=${this.compact}>
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
