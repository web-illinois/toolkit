
let nextSubmenuId = 1;

function isList(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.nodeName === 'UL';
}

function isListItem(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.nodeName === 'LI';
}

function isLink(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.nodeName === 'A';
}

function makeSubmenuId() {
    return 'il-nav-submenu-' + (nextSubmenuId++);
}

class TopLevelItem {
    constructor(elem) {
        this.elem = elem;
        this.submenu = null;
        const submenu = this.elem.querySelector('ul');
        if (submenu) {
            const id = makeSubmenuId();
            this.submenu = submenu;
            this.submenu.id = id;
            const toggle = document.createElement('button');
            toggle.setAttribute('aria-controls', id);
            toggle.setAttribute('aria-expanded', 'false');
            toggle.appendChild(document.createTextNode('open/close'));
            toggle.addEventListener('click', this.handleToggleClick.bind(this));
            toggle.addEventListener('mouseover', this.handleMouseOver.bind(this));
            toggle.addEventListener('mouseout', this.handleMouseOut.bind(this));
            this.toggle = this.elem.insertBefore(toggle, submenu);
        }
    }

    handleToggleClick(evt) {
        if (!this.hasSubmenu()) return;
        this.isExpanded() ? this.hideSubmenu() : this.showSubmenu();
    }

    handleMouseOver(evt) {
        //this.showSubmenu();
    }

    handleMouseOut(evt) {
        //this.hideSubmenu();
    }

    hasSubmenu() {
        return this.submenu !== null;
    }

    hideSubmenu() {
        if (!this.hasSubmenu()) return;
        this.toggle.setAttribute('aria-expanded', 'false');
    }

    isExpanded() {
        return this.hasSubmenu() && this.toggle.getAttribute('aria-expanded') === 'true';
    }

    showSubmenu() {
        if (!this.hasSubmenu()) return;
        this.toggle.setAttribute('aria-expanded', 'true');
    }
}

class Navigation {
    constructor(elem) {
        this.elem = elem;
        this.items = [];
        this.elem.childNodes.forEach(e => {
            if (isListItem(e)) {
                const item = new TopLevelItem(e);
                this.items.push(item);
            }
        })
    }
}

export default Navigation;