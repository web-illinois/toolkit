import {LitElement, html, css} from 'lit-element';

class Navigation extends LitElement {
  static get properties() {
    return {
      compact: {type: Boolean, default: false, attribute: true, reflect: true}
    };
  }

  static get styles() {
    return css`
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.full ul {
  padding-top: .375rem;
  flex-direction: row;
  font-size: 1rem;
  background-color: var(--il-cloud-1);
}
.compact ul {
  flex-direction: column;
}
        `
  }

  constructor() {
    super();
    this._compact = false;
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  get compact() {
    return this._compact;
  }

  set compact(isCompact) {
    const wasCompact = this._compact;
    if (wasCompact !== isCompact) {
      this._compact = isCompact;
      this.requestUpdate('compact', wasCompact);
      this.updateComplete.then(() => {
        const evt = new CustomEvent('compact', {detail: isCompact});
        this.dispatchEvent(evt);
      });
    }
  }

  getHeader() {
    let parent = this.parentElement;
    while (parent) {
      if (parent.nodeName === 'IL-HEADER') {
        return parent;
      }
      parent = parent.parentElement;
    }
    return undefined;
  }

  handleContentLoaded(evt) {
    this.getSections().forEach(section => {
      section.addEventListener('collapse', this.handleSectionCollapse.bind(this));
      section.addEventListener('expand', this.handleSectionExpand.bind(this));
      section.addEventListener('exit', this.handleSectionExit.bind(this));
    });
    const header = this.getHeader();
    if (header) {
      header.addEventListener('viewChange', this.handleHeaderViewChange.bind(this));
      this.compact = header.view === 'compact';
    }
  }

  handleHeaderViewChange(evt) {
    console.debug(evt);
    this.compact = evt.detail === 'compact';
  }

  handleSectionCollapse(evt) {
  }

  handleSectionExit(evt) {
    const section = evt.currentTarget;
    if (evt.detail === 'back') {
      if (section.previousElementSibling) {
        section.previousElementSibling.focus();
      } else {
        section.parentNode.lastElementChild.focus();
      }
    } else if (evt.detail === 'forward') {
      if (section.nextElementSibling) {
        section.nextElementSibling.focus();
      } else {
        section.parentNode.firstElementChild.focus();
      }
    }
  }

  handleSectionExpand(evt) {
    const activeSection = evt.currentTarget;
    this.getSections().forEach(section => {
      if (section.expanded && section !== activeSection) {
        section.collapse();
      }
    });
  }

  getSections() {
    return this.querySelectorAll('il-nav-section');
  }

  render() {
    return html`
        <nav class=${this.compact ? 'compact' : 'full'} aria-label='main menu'>
            <ul>
                <slot></slot>
            </ul>
        </nav>`
  }
}

customElements.define('il-nav', Navigation);
