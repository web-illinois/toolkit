import {LitElement, html, css} from 'lit-element';

class NavigationSection extends LitElement {
  static get properties() {
    return {
      expanded: {type: Boolean, default: false, attribute: true, reflect: true},
      compact: {type: Boolean, default: false, attribute: false}
    };
  }

  static get styles() {
    return css`
li {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
}
.heading {
    display: flex;
    flex-direction: row;
    align-items: center;
} 
.full .submenu {
    position: absolute;
    left: 0;
    top: 100%;
}
.full.collapsed .submenu {
  display: none;
}
.compact .heading {
  margin: 0;
  padding: 6px 20px;
  display: grid;
  grid-template-columns: auto 60px;
  grid-gap: 20px;
  background-color: var(--il-cloud-1);
  border-top: 2px solid var(--il-cloud-3);
}
.compact .heading ::slotted(a) {
  text-decoration: none;
  color: var(--il-blue);
  font: 700 22px/30px var(--il-source-sans); 
}
.compact .heading button {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 60px;
  height: 44px;
  border: 2px solid var(--il-blue);
  border-radius: 4px;
  margin: 0;
  padding: 0;
  background-color: transparent;
}
.compact .heading button svg {
  position: absolute;
  top: 8px;
  left: 16px;
  display: block;
  width: 24px;
  height: 24px;
  fill: var(--il-blue);
  transition: all .3s;
}
.compact.expanded .heading button svg {
  transform: rotate(180deg);
}
.compact .submenu {
  display: none;
}
.compact.expanded .submenu {
  display: block;
}
:host(:last-child) .compact {
  border-bottom: 2px solid var(--il-cloud-3);
}
        `
  }

  constructor() {
    super();
    this._expanded = false;
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  get expanded() {
    return this._expanded;
  }

  set expanded(isExpanded) {
    const wasExpanded = this._expanded;
    if (wasExpanded !== isExpanded) {
      this._expanded = isExpanded;
      this.requestUpdate('expanded', wasExpanded);
      this.updateComplete.then(() => {
        const evt = new Event(isExpanded ? 'expand' : 'collapse');
        this.dispatchEvent(evt);
      });
    }
  }

  handleContentLoaded(evt) {
    const link = this.getLink();
    if (link) {
      link.addEventListener('keydown', this.handleLinkKeypress.bind(this));
    }
    this.getSubmenuLinks().forEach(submenuLink => {
      submenuLink.addEventListener('keydown', this.handleSubmenuLinkKeypress.bind(this));
    });
    this.compact = this.getNavigation().compact;
    this.getNavigation().addEventListener('compact', evt => this.compact = evt.detail);
  }

  handleLinkKeypress(evt) {
    if (evt.code === 'ArrowDown') {
      if (!this.expanded) {
        this.expandAndMoveFocusToFirstSubmenuLink();
      }
      else {
        this.moveFocusToFirstSubmenuLink();
      }
    }
    else if (evt.code === 'ArrowUp') {
      if (!this.expanded) {
        this.expandAndMoveFocusToLastSubmenuLink();
      }
      else {
        //this.moveFocusToFirstSubmenuLink();
      }
    }
    else if (evt.code === 'ArrowLeft') {
      const event = new CustomEvent('exit', { detail: 'back' });
      this.dispatchEvent(event);
    }
    else if (evt.code === 'ArrowRight') {
      const event = new CustomEvent('exit', { detail: 'forward' });
      this.dispatchEvent(event);
    }
  }

  handleSubmenuLinkKeypress(evt) {
    const link = evt.currentTarget;
    const item = link.parentNode;
    if (evt.code === 'Escape') {
      this.collapse();
      this.getLink().focus();
    }
    else if (evt.code === 'ArrowDown') {
      if (item.nextElementSibling) {
        item.nextElementSibling.querySelector('a').focus();
      }
      else if (this.isCompact()) {
        const event = new CustomEvent('exit', { detail: 'forward' });
        this.dispatchEvent(event);
      }
      else {
        item.parentNode.firstElementChild.querySelector('a').focus();
      }
    }
    else if (evt.code === 'ArrowUp') {
      if (item.previousElementSibling) {
        item.previousElementSibling.querySelector('a').focus();
      }
      else if (this.isCompact()) {
        this.getLink().focus();
      }
      else {
        item.parentNode.lastElementChild.querySelector('a').focus();
      }
    }
  }

  handleToggleClick(evt) {
    this.expanded ? this.collapse() : this.expand();
  }

  collapse() {
    this.expanded = false;
  }

  expand() {
    this.expanded = true;
  }

  expandAndMoveFocusToFirstSubmenuLink() {
    this.expand();
    this.updateComplete.then(() => this.moveFocusToFirstSubmenuLink());
  }

  expandAndMoveFocusToLastSubmenuLink() {
    this.expand();
    this.updateComplete.then(() => this.moveFocusToLastSubmenuLink());
  }

  focus() {
    this.getLink().focus();
  }

  getButton() {
    return this.shadowRoot.querySelector('button');
  }

  getFirstSubmenuLink() {
    const links = this.getSubmenuLinks();
    return links.item(0);
  }

  getLastSubmenuLink() {
    const links = this.getSubmenuLinks();
    return links.item(links.length - 1);
  }

  getLink() {
    return this.querySelector("a[slot='label']")
  }

  getNavigation() {
    let parent = this.parentElement;
    while (parent) {
      if (parent.nodeName === 'IL-NAV') {
        return parent;
      }
      parent = parent.parentElement;
    }
  }

  getSubmenuLinks() {
    return this.querySelectorAll('ul a');
  }

  isCompact() {
    return this.compact;
  }

  moveFocusToFirstSubmenuLink() {
    this.getFirstSubmenuLink().focus();
  }

  moveFocusToLastSubmenuLink() {
    this.getLastSubmenuLink().focus();
  }

  render() {
    const state = this.expanded ? 'expanded' : 'collapsed';
    const view = this.compact ? 'compact' : 'full';
    return html`
        <li class="${state} ${view}">
            <div class="heading">
                <div class="label">
                    <slot name="label"></slot>
                </div>
                <div class="toggle">
                    <button aria-controls="submenu" aria-expanded="${this.expanded ? 'true' : 'false'}" @click=${this.handleToggleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="submenu" id="submenu">
                <slot></slot>
            </div>
        </li>`
  }
}

customElements.define('il-nav-section', NavigationSection);
