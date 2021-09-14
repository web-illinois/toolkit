module.exports = class Page {
  constructor(base, params) {
    this.base = base;
    if (typeof params === 'object') {
      this.params = params;
    }
    else {
      this.params = { page: params !== undefined ? params : 1 };
    }
  }

  toString() {
    const url = new URL(this.base);
    Object.keys(this.params).forEach(p => url.searchParams.set(p, this.params[p]));
    return url.href;
  }
}