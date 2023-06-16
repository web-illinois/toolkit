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
      _compact: { default: false, type: Boolean, attribute: false, state: true }
    };
  }

  static hasContainerSupport() {
    return CSS.supports('container-type', 'inline-size');
  }

  handleResize(evt) {
    this._compact = this.offsetWidth < TabComponent.compactSizePixelWidth;
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
  }

  handleTabsChange(e) {
    const childNodes = e.target.assignedNodes({flatten: true});
    childNodes.map((node) => {
        if (node.children.length > 0) {
            Array.from(node.children).forEach(e => {
                let button = document.createElement('button');
                if (!e.parentElement.hasAttribute('data-il-panel-visible')) {
                    e.parentElement.setAttribute('data-il-panel-visible', e.getAttribute('data-il-panel'));
                    button.setAttribute('aria-selected', 'true');
                } else {
                    button.tabIndex = -1;
                }
                button.innerText = e.innerText;
                button.classList.add('il-tabs-button');
                button.setAttribute('data-il-panel', e.getAttribute('data-il-panel'));
                button.setAttribute('role', 'tab');
                button.setAttribute('aria-controls', e.getAttribute('data-il-panel'));
                button.addEventListener("click", (event) => {
                    var previousSelectedItem = document.getElementById(event.target.parentElement.getAttribute('data-il-panel-visible'));
                    previousSelectedItem.style.display = 'none';

                    var previousSelectedButton = document.querySelector(`[data-il-panel='${event.target.parentElement.getAttribute('data-il-panel-visible')}']`);
                    previousSelectedButton.removeAttribute('aria-selected');
                    previousSelectedButton.tabIndex = -1;

                    var currentSelectedItem = document.getElementById(event.target.getAttribute('data-il-panel'));
                    currentSelectedItem.style.display = '';

                    var currentSelectedButton = event.target;
                    currentSelectedButton.setAttribute('aria-selected', 'true');
                    currentSelectedButton.removeAttribute('tabindex');

                    event.target.parentElement.setAttribute('data-il-panel-visible', event.target.getAttribute('data-il-panel'));
                });
                button.addEventListener("keydown", (event) => {
                    if (event.code == "ArrowLeft" || event.code == "ArrowUp") {
                        if (event.target.previousElementSibling) {
                            event.target.previousElementSibling.focus();
                        } else {
                            event.target.parentElement.lastElementChild.focus();
                        }
                    } else if (event.code == "ArrowRight" || event.code == "ArrowDown") {
                        if (event.target.nextElementSibling) {
                            event.target.nextElementSibling.focus();
                        }else {
                            event.target.parentElement.firstElementChild.focus();
                        }
                    }
                });
                node.removeChild(e);
                node.appendChild(button);
            }); 
        }
    });
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

  firstUpdated() {
  }

  render() {
    return html`
        <div id="container" ?compact=${this._compact}>
            <div id="tablist" role="tablist">
                <div id="tablist-inner" role="tablist">
                    <slot name="tabs" @slotchange=${this.handleTabsChange}></slot>
                </div>
            </div>
            <div id="tabpanels">
                <slot @slotchange=${this.handlePanelsChange}></slot>
            </div>
        </div>`;
  }
}

customElements.define('il-tabs', TabComponent);
