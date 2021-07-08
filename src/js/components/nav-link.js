import {LitElement, html, css} from 'lit-element';

class NavigationLink extends LitElement {
    static get properties() {
        return {
          compact: {type: Boolean, default: false, attribute: false},
          href: {type: String, attribute: true},
          label: {type: String, attribute: true}
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
.full {
  color: var(--il-blue);
  height: 100%;
}
::slotted(a) {
  display: block;
  padding: 10px 20px;
  font: 700 16px/18px var(--il-source-sans);
  color: inherit; 
  text-decoration: none;
}
::slotted(a:hover),
::slotted(a:focus) {
  color: var(--il-altgeld);
  text-decoration: underline;
  background-color: white;
  outline: 0;
}
.full ::slotted(a) {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.compact ::slotted(a) {
  margin: 0;
  padding: 10px 20px;
  display: block;
  background-color: var(--il-cloud-1);
  border-top: 1px solid #c0c0c0;
}
.compact ::slotted(a) {
  text-decoration: none;
  color: var(--il-blue);
  font: 600 20px/28px var(--il-source-sans);
}
.compact ::slotted(a:hover),
.compact ::slotted(a:focus) {
  text-decoration: underline;
  color: var(--il-altgeld);
  outline: 0;
}
        `;
    }

    constructor() {
      super();
      document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
    }

    handleContentLoaded(evt) {
      this.compact = this.getNavigation().compact;
      this.getNavigation().addEventListener('compact', evt => this.compact = evt.detail);
      const link = this.getLink();
      if (link) {
        link.addEventListener('keydown', this.handleLinkKeypress.bind(this));
      }
     }

    getLink() {
      return this.querySelector('a');
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
      
    render() {
      const view = this.compact ? 'compact' : 'full';
      return html`<li class=${view}>
            <slot>
                <a href=${this.href}>${this.label}</a>
            </slot>
        </li>`
    }
}

customElements.define('il-nav-link', NavigationLink);
