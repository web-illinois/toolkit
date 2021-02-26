
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
        if (this.dropdown) {
            this.dropdown.querySelectorAll('a').forEach(link => {
                link.addEventListener('keydown', this.handleSubmenuLinkKeypress.bind(this));
            });
        }
    }

    closeSubmenu() {
        if (this.hasSubmenu()) {
            this.getToggle().setAttribute('aria-expanded', 'false');
        }
    }

    getNextItem() {
        return this.el.nextElementSibling;
    }

    getPreviousItem() {
        return this.el.previousElementSibling;
    }

    getSubmenu() {
        return this.dropdown;
    }

    getToggle() {
        return this.button;
    }

    handleLinkKeypress(evt) {
        if (evt.code === 'ArrowRight') {
            if (this.hasNextItem()) {
                this.getNextItem().querySelector('a').focus();
            }
            else {
                this.el.parentNode.firstElementChild.querySelector('a').focus();
            }
        }
        if (evt.code === 'ArrowLeft') {
            if (this.hasPreviousItem()) {
                this.getPreviousItem().querySelector('a').focus();
            }
            else {
                this.el.parentNode.lastElementChild.querySelector('a').focus();
            }
        }
        if (evt.code === 'ArrowDown') {
            if (this.nav.isCompact()) {
                if (this.hasSubmenu() && this.submenuIsOpen()) {
                    this.getSubmenu().querySelector('a').focus();
                }
                else {
                    if (this.hasNextItem()) {
                        this.getNextItem().querySelector('a').focus();
                    }
                    else {
                        this.el.parentNode.firstElementChild.querySelector('a').focus();
                    }
                }
            }
            else {
                if (this.hasSubmenu()) {
                    if (!this.submenuIsOpen()) {
                        this.openSubmenu();
                    }
                    this.getSubmenu().querySelector('a').focus();
                }
            }
        }
        if (this.hasSubmenu()) {
            if (evt.code === 'ArrowUp') {
                if (!this.submenuIsOpen()) {
                    this.openSubmenu();
                }
                this.getSubmenu().querySelector('li:last-of-type a').focus();
            }
        }
    }

    handleSubmenuLinkKeypress(evt) {
        const item = evt.target.parentNode;
        if (evt.code === 'Escape') {
            this.closeSubmenu();
            this.link.focus();
        }
        if (evt.code === 'ArrowDown') {
            if (item.nextElementSibling) {
                item.nextElementSibling.querySelector('a').focus();
            }
            else if (!this.nav.isCompact()) {
                item.parentNode.firstElementChild.querySelector('a').focus();
            }
            else if (this.hasNextItem()) {
                this.getNextItem().querySelector('a').focus();
            }
            else {
                this.el.parentNode.firstElementChild.querySelector('a').focus();
            }
        }
        if (evt.code === 'ArrowUp') {
            if (item.previousElementSibling) {
                item.previousElementSibling.querySelector('a').focus();
            }
            else {
                item.parentNode.lastElementChild.querySelector('a').focus();
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

    hasPreviousItem() {
        return !!this.el.previousElementSibling;
    }

    hasNextItem() {
        return !!this.el.nextElementSibling;
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

    isCompact() {
        return this.el.classList.contains('il-navigation--compact');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.il-navigation').forEach(nav => {
        new Navigation(nav);
    })
});
