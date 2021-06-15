import {LitElement, html, css} from 'lit-element';

class NavigationSection extends LitElement {
  static get properties() {
    return {
      expanded: {type: Boolean, default: false, attribute: true, reflect: true},
      compact: {type: Boolean, default: false, attribute: false},
      right: {type: Boolean, default: false, attribute: true}
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
.full .contents {
    position: absolute;
    left: 0;
    top: 100%;
}
.full .contents.right {
  left: initial;
  right: 0;
}
.full .heading {
  position: relative;
  padding: 0;
  color: var(--il-blue);
}
.full .heading:hover {
  background-color: white;
  color: var(--il-altgeld);
}
.full .label ::slotted(a) {
  display: block;
  padding: 10px 40px 10px 20px;
  font: 700 16px/18px var(--il-source-sans);
  color: inherit; 
  text-decoration: none;
}
.full .label ::slotted(a:hover),
.full .label ::slotted(a:focus) {
  color: var(--il-altgeld);
  text-decoration: underline;
  background-color: white;
  outline: 0;
}
.full .indicator {
  position: absolute;
  left: 5px;
  top: 5px;
  right: 5px;
  bottom: 5px;
  display: block;
  pointer-events: none;
  border: 2px solid transparent;
}
.full .indicator svg {
  position: absolute;
  right: 12px;
  top: calc(50% - 7px);
  display: block;
  width: 14px;
  height: 14px;
  fill: currentcolor;
}
.full .heading:hover .indicator svg {
  transform: rotate(180deg);
}
.full .heading .indicator.selected svg {
  transform: rotate(180deg);
  fill: var(--il-altgeld);
}
.full .toggle {
  display: none;
}
.full .toggle button {
  display: block;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: transparent;
  width: 24px;
  height: 24px;
}
.full.expanded {
  background-color: white;
}
.full.collapsed .contents {
  display: none;
}
.compact .heading {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: auto 60px;
  background-color: var(--il-cloud-1);
  border-top: 1px solid #c0c0c0;
}
.compact .heading ::slotted(a) {
  box-sizing: border-box;
  text-decoration: none;
  color: var(--il-blue);
  padding: 6px 20px;
  display: block;
  border: solid 2px var(--il-cloud-1);
  width: 100%;
  font: 600 20px/28px var(--il-source-sans);
}
.compact .heading ::slotted(a:hover),
.compact .heading ::slotted(a:focus) {
  text-decoration: underline;
  color: var(--il-altgeld);
  background: white;
  border: solid 2px white;
  outline: 0;
}
.compact .indicator {
  display: none;
}
.compact .heading button {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 60px;
  height: 100%;
  min-height: 44px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: var(--il-blue);
}
.compact .heading .toggle {
  height: 100%;
}

.compact .heading button svg {
  position: absolute;
  top: 27%;
  left: 16px;
  display: block;
  width: 23px;
  height: 20px;
  fill: currentColor;
  transition: transform .3s;
}
.compact .heading button:hover,
.compact .heading button:focus {
  color: var(--il-altgeld);
  background: white;
  outline: 0;
}
.compact.expanded .heading button svg {
  transform: rotate(180deg);
}
.compact .contents {
  display: none;
}
.compact.expanded .contents {
  display: block;
}
:host(:last-child) .compact {
  border-bottom: 1px solid #c0c0c0;
}
        `
  }

  constructor() {
    super();
    this._expanded = false;
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
    document.addEventListener('click', this.handleDocumentClick.bind(this));
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
      link.addEventListener('blur', this.handleLinkBlurMain.bind(this));
      link.addEventListener('focus', this.handleLinkFocus.bind(this));
    }
    this.getSubmenuLinks().forEach(submenuLink => {
      submenuLink.addEventListener('keydown', this.handleSubmenuLinkKeypress.bind(this));
      submenuLink.addEventListener('blur', this.handleLinkBlur.bind(this));
    });
    this.compact = this.getNavigation().compact;
    this.getNavigation().addEventListener('compact', evt => this.compact = evt.detail);
  }

  handleDocumentClick(evt) {
    if (this.expanded && !this.contains(evt.target)) {
      this.collapse();
    }
  }

  handleLinkFocus(evt) {
    if (!this.expanded) {
      this.expand();
      const event = new CustomEvent('focus-label');
      this.dispatchEvent(event);
    }
  }

  
  handleLinkBlur(evt) {
    if (this.expanded) {
      window.setTimeout(() => {
        if (!this.containsFocus()) this.collapse();
      }, 100);
    }
  }

  handleLinkBlurMain(evt) {
    const event = new CustomEvent('blur-label');
    this.dispatchEvent(event);
    this.handleLinkBlur(evt);
  }

  handleLinkKeypress(evt) {
    if (evt.code === 'Space') {
      evt.preventDefault();
      window.location.href = this.getLink().href;
    }
    else if (evt.code === 'Escape') {
      evt.preventDefault();
      if (this.expanded) {
        this.collapse();
      }
    }
    else if (evt.code === 'ArrowDown') {
      evt.preventDefault();
      if (!this.expanded) {
        this.expandAndMoveFocusToFirstSubmenuLink();
      }
      else {
        this.moveFocusToFirstSubmenuLink();
      }
    }
    else if (evt.code === 'ArrowUp') {
      evt.preventDefault();
      if (!this.expanded) {
        this.expandAndMoveFocusToLastSubmenuLink();
      }
    }
    else if (evt.code === 'ArrowLeft') {
      evt.preventDefault();
      const event = new CustomEvent('exit', { detail: 'back' });
      this.dispatchEvent(event);
    }
    else if (evt.code === 'ArrowRight') {
      evt.preventDefault();
      const event = new CustomEvent('exit', { detail: 'forward' });
      this.dispatchEvent(event);
    }
  }

  handleMouseOut(evt) {
    if (!this.isCompact()) {
      this.collapse();
    }
  }

  handleMouseOver(evt) {
    if (!this.isCompact()) {
      this.expand();
    }
  }

  handleSubmenuLinkKeypress(evt) {
    const link = evt.currentTarget;
    const item = link.parentNode;
    if (evt.code === 'Escape') {
      evt.preventDefault();
      this.collapseAndMoveFocusToParent();
    }
    else if (evt.code === 'ArrowDown') {
      evt.preventDefault();
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
      evt.preventDefault();
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
    else if (evt.code === 'ArrowLeft') {
      evt.preventDefault();
      this.collapseAndMoveFocusToParent();
      const event = new CustomEvent('exit', { detail: 'back' });
      this.dispatchEvent(event);
    }
    else if (evt.code === 'ArrowRight') {
      evt.preventDefault();
      this.collapseAndMoveFocusToParent();
      const event = new CustomEvent('exit', { detail: 'forward' });
      this.dispatchEvent(event);
    }
  }

  handleToggleClick(evt) {
    this.expanded ? this.collapse() : this.expand();
  }

  collapse() {
    this.expanded = false;
  }

  collapseAndMoveFocusToParent() {
    this.getLink().focus();
    this.collapse(); 
  }

  containsFocus() {
    return this.contains(document.activeElement);
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

  getLinkText() {
    const link = this.getLink();
    return link ? link.textContent : '';
  }

  getNavigation() {
    let parent = this.parentElement;
    while (parent) {
      if (parent.nodeName === 'IL-NAV') {
        return parent;
      }
      parent = parent.parentElement;
    }
    return undefined;
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
    const rightjust = true;
    return html`
        <li class="${state} ${view}" @mouseover=${this.handleMouseOver} @mouseout=${this.handleMouseOut}>
            <div class="heading">
                <div class="label">
                    <slot name="label"></slot>
                </div>
                <div class="indicator" role="presentation">
                    <svg aria-label="Toggle menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                    </svg>
                </div>
                <div class="toggle">
                    <button aria-controls="contents" aria-expanded="${this.expanded ? 'true' : 'false'}" @click=${this.handleToggleClick}>
                        <svg aria-label="Toggle ${this.getLinkText()} menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="${this.right ? 'contents right' : 'contents'}" id="contents">
                <slot></slot>
            </div>
        </li>`
  }
}

customElements.define('il-nav-section', NavigationSection);
