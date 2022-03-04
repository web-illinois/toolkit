module.exports = class Alignment {
    constructor(str) {
        this.x = 'center';
        this.y = 'center';
        const words = str ? str.toLowerCase().split(/\s+/) : [];
        if (words.includes('left')) {
            this.x = 'left';
        }
        if (words.includes('right')) {
            this.x = 'right';
        }
        if (words.includes('top')) {
            this.y = 'top';
        }
        if (words.includes('bottom')) {
            this.y = 'bottom';
        }
    }
}