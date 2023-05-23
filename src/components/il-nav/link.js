export default class Link {

    constructor(elem) {
        this.elem = elem;
        this.elem.addEventListener('blur', this.handleBlur.bind(this));
        this.elem.addEventListener('click', this.handleClick.bind(this));
        this.elem.addEventListener('focus', this.handleFocus.bind(this));
    }

    handleBlur(evt) {
        console.debug('blur')
    }

    handleClick(evt) {
        console.debug('click')
    }

    handleFocus(evt) {
        console.debug('focus')
    }
}

//module.exports = { Link }