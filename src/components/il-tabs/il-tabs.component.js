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

   addPolyfillForContainerSupprt() {
    console.debug("Tab: No support for @container detected: using manual resize");
    window.addEventListener('load', this.handleResize.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
   }

   removePolyfillForContainerSupprt() {
    console.debug("Tab: removing resize");
    window.removeEventListener('load', this.handleResize.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
   }

  constructor() {
    super();
  }   

  connectedCallback() {
   super.connectedCallback();
   if (!TabComponent.hasContainerSupport()) {
    this.addPolyfillForContainerSupprt();
  }
}
  
  disconnectedCallback() {
    if (!TabComponent.hasContainerSupport()) {
      this.removePolyfillForContainerSupprt();
    }
    super.disconnectedCallback();
  }

  getAllTabs() {
    return Array.from(this.querySelector('*[slot=tabs]').children);
  }

  getAllPanels() {
    return Array.from(this.querySelectorAll('*:not([slot])'));
  }

  setTabs() {
    console.debug("Tab: set information from tabs slot");
    this.getAllTabs().forEach((item, i) => {
      item.addEventListener('keydown', this.handleKeypress);
      item.addEventListener('click', e => this.setActivePanel(item));
      item.setAttribute('role', 'tab');
      if (i == 0) {
        item.setAttribute('tabindex', 0);
        item.setAttribute('aria-selected', 'true');
        this.setActivePanel(item);
      } else {
        item.setAttribute('tabindex', -1);
      }
    });
  }

  setActivePanel(item) {
    console.debug("Tab: set active panel");
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

  handleKeypress(event) {
    // if vertical (compact or il-vertical-tabs), use up and down arrows -- otherwise, use left and right arrows
    let tabComponent = event.target.closest('il-tabs');
    var arrowDirectionVertical = tabComponent.compact || tabComponent.classList.contains('il-vertical-tabs');
    if ((arrowDirectionVertical && event.code == "ArrowUp") || (!arrowDirectionVertical && event.code == "ArrowLeft")) {
      if (event.target.previousElementSibling) {
          event.target.previousElementSibling.focus();
      } else {
          event.target.parentElement.lastElementChild.focus();
      }
    } else if ((arrowDirectionVertical && event.code == "ArrowDown") || (!arrowDirectionVertical && event.code == "ArrowRight")) {
        if (event.target.nextElementSibling) {
            event.target.nextElementSibling.focus();
        } else {
            event.target.parentElement.firstElementChild.focus();
        }
    } else if (event.code == "Enter" || event.code == "Space") {
      event.target.click();
    }
  }

  render() {
    this.setTabs();
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
