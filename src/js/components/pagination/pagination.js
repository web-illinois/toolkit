class Item {

}

class Page extends Item {
  constructor(pageNumber) {
    super();
    this._pageNumber = pageNumber;
  }

  get pageNumber() {
    return this._pageNumber;
  }
}

class CurrentPage extends Page { }

class PageLink extends Page {
  constructor(nav, pageNumber) {
    super(pageNumber);
    this.nav = nav;
  }

  get url() {
    return this.nav.getPageUrl(this.pageNumber);
  }
}

class FirstPageLink extends PageLink { }

class LastPageLink extends PageLink { }

class NextPageLink extends PageLink { }

class PreviousPageLink extends PageLink { }

class Navigation {
  constructor(baseUrl, pageCount, pageParamName = 'page') {
    this.pageParamName = pageParamName;
    this.pageCount = pageCount;
    this.baseUrl = baseUrl;
    this.currentPage = 1;
    if (!(typeof this.baseUrl === 'function')) {
      const url = new URL(baseUrl);
      if (url.searchParams.has(this.pageParamName)) {
        this.currentPage = url.searchParams.get(this.pageParamName);
      }
    }
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(number) {
    this._currentPage = parseInt(number)
  }

  get items() {
    const items = [];
    if (this.hasFirstPageLink()) {
      items.push(this.firstPageLink);
    }
    if (this.hasPreviousPageLink()) {
      items.push(this.previousPageLink);
    }
    for (let page = 1; page <= this.pageCount; page++) {
      if (page === this.currentPage) {
        items.push(this.currentPageItem);
      }
      else {
        items.push(this.getPageLink(page));
      }
    }
    if (this.hasNextPageLink()) {
      items.push(this.nextPageLink);
    }
    if (this.hasLastPageLink()) {
      items.push(this.lastPageLink);
    }
    return items;
  }

  get currentPageItem() {
    return new CurrentPage(this.currentPage);
  }

  get firstPageLink() {
    return new FirstPageLink(this, 1);
  }

  get lastPageLink() {
    return new LastPageLink(this, this.pageCount);
  }

  get nextPageLink() {
    return new NextPageLink(this, this.currentPage + 1);
  }

  get pageCount() {
    return this._pageCount;
  }

  set pageCount(pageCount) {
    this._pageCount = parseInt(pageCount);
  }

  get previousPageLink() {
    return new PreviousPageLink(this, this.currentPage - 1);
  }

  getPageLink(pageNumber) {
    return new PageLink(this, pageNumber);
  }

  getPageUrl(pageNumber) {
    if (typeof this.baseUrl === 'function') {
      return this.baseUrl(pageNumber);
    }
    else {
      const url = new URL(this.baseUrl);
      url.searchParams.set(this.pageParamName, pageNumber);
      return url.href;
    }
  }

  hasFirstPageLink() {
    return this.currentPage !== 1;
  }

  hasLastPageLink() {
    return this.currentPage !== this.pageCount;
  }

  hasNextPageLink() {
    return this.currentPage !== this.pageCount;
  }

  hasPreviousPageLink() {
    return this.currentPage !== 1;
  }

  setPageParamName(paramName) {
    this.pageParamName = paramName;
    return this;
  }
}

module.exports = { CurrentPage, FirstPageLink, LastPageLink, Navigation, NextPageLink, PageLink, PreviousPageLink };