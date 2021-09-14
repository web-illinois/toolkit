module.exports = class Page {
  constructor(number, pageCount) {
    this.number = parseInt(number);
    this.pageCount = parseInt(pageCount);
  }

  hasNext() {
    return !this.isLast();
  }

  hasPrevious() {
    return !this.isFirst();
  }

  isFirst() {
    return this.number === 1;
  }

  isLast() {
    return this.number === this.pageCount;
  }

  next() {
    return this.hasNext() ? this.number + 1 : undefined;
  }

  previous() {
    return this.hasPrevious() ? this.number - 1 : undefined;
  }
}