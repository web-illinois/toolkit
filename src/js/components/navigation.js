
class TopLevelItem {
    constructor(nav, el) {
        this.nav = nav;
        this.el = el;
        this.link = el.querySelector('a');
        this.button = el.querySelector('button');
        this.dropdown = el.querySelector('ul');
        if (this.link) {
            this.link.addEventListener('keydown', this.handleLinkKeypress.bind(this));
        }
        if (this.button) {
            this.button.addEventListener('click', this.handleToggleClick.bind(this));
            this.button.addEventListener('keydown', this.handleToggleKeypress.bind(this));
        }
    }

    closeSubmenu() {
        if (this.hasSubmenu()) {
            this.getToggle().setAttribute('aria-expanded', 'false');
        }
    }

    getSubmenu() {
        return this.dropdown;
    }

    getToggle() {
        return this.button;
    }

    handleLinkKeypress(evt) {
        if (this.hasSubmenu()) {
            if (evt.code === 'ArrowDown') {
                if (!this.submenuIsOpen()) {
                    this.openSubmenu();
                }
                this.getSubmenu().querySelector('a').focus();
            }
            if (evt.code === 'ArrowUp') {
                if (!this.submenuIsOpen()) {
                    this.openSubmenu();
                }
                this.getSubmenu().querySelector('li:last-of-type a').focus();
            }
        }
    }

    handleToggleClick(evt) {
        this.toggleSubmenu();
    }

    handleToggleKeypress(evt) {
        if (evt.code === 'Space') {
            //this.toggleButton(evt.target);
        }
    }

    hasSubmenu() {
        return !!this.dropdown;
    }

    openSubmenu() {
        if (this.hasSubmenu()) {
            this.nav.closeAll();
            this.getToggle().setAttribute('aria-expanded', 'true');
        }
    }

    submenuIsOpen() {
        return this.getToggle().getAttribute('aria-expanded') === 'true';
    }

    toggleSubmenu() {
        this.submenuIsOpen() ? this.closeSubmenu() : this.openSubmenu();
    }
}

class Navigation {
    constructor(el) {
        this.el = el;
        this.items = [];
        this.el.querySelector('ul').childNodes.forEach(child => {
            if (child.nodeType === Node.ELEMENT_NODE && child.nodeName === 'LI' ) {
                const item = new TopLevelItem(this, child);
                this.items.push(item);
            }
        });
    }

    closeAll() {
        this.items.map(item => item.closeSubmenu());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.il-navigation').forEach(nav => {
        new Navigation(nav);
    })
});
