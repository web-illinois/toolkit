const Pagination = require('./pagination');

test('constructor argument sets base URL', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  expect(nav.baseUrl).toBe('http://example.com/');
})

test('constructor argument sets page count', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  expect(nav.pageCount).toBe(5);
})

test('constructor converts page count to integer', () => {
  const nav = new Pagination.Navigation('http://example.com/', '5');
  expect(nav.pageCount).toBe(5);
})

describe('constructor with custom page param name', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5, 'p');

  test('sets the page param name', () => {
    expect(nav.pageParamName).toBe('p');
  })

  test('sets the page count', () => {
    expect(nav.pageCount).toBe(5);
  })
})

// Page URLs

test('navigation throws an error with an invalid base URL', () => {
  expect(() => new Pagination.Navigation(undefined, 5)).toThrow('Invalid URL: undefined');
})

test('navigation with custom param name', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.setPageParamName('p');
  expect(nav.getPageUrl(3)).toBe('http://example.com/?p=3');
})

test('navigation base URL with additional params', () => {
  const nav = new Pagination.Navigation('http://example.com/?one=1&two=2', 5);
  expect(nav.getPageUrl(3)).toBe('http://example.com/?one=1&two=2&page=3');
})

test('navigation base URL with existing page param', () => {
  const nav = new Pagination.Navigation('http://example.com/?page=1&one=1&two=2', 5);
  expect(nav.getPageUrl(3)).toBe('http://example.com/?page=3&one=1&two=2');
})

test('navigation base URL with existing custom page param', () => {
  const nav = new Pagination.Navigation('http://example.com/?p=1&one=1&two=2', 5);
  nav.setPageParamName('p');
  expect(nav.getPageUrl(3)).toBe('http://example.com/?p=3&one=1&two=2');
})

test('custom function for base URL', () => {
  const nav = new Pagination.Navigation(page => `http://example.com/page/${page}/`, 5);
  expect(nav.getPageUrl(3)).toBe('http://example.com/page/3/');
})

// Page links

describe('getting a page link', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  const link = nav.getPageLink(3);

  test('returns a page link object', () => {
    expect(link).toBeInstanceOf(Pagination.PageLink);
  })

  test('page link has requested page number', () => {
    expect(link.pageNumber).toBe(3);
  })
})

// Current page

test('default current page is 1', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  expect(nav.currentPage).toBe(1);
})

test('get current page from baseURL', () => {
  const nav = new Pagination.Navigation('http://example.com/?page=3', 5);
  expect(nav.currentPage).toBe(3);
})

test('set current page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 3;
  expect(nav.currentPage).toBe(3);
})

describe('getting the current page item', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 3;

  test('current page is a current page', () => {
    expect(nav.currentPageItem).toBeInstanceOf(Pagination.CurrentPage);
  })

  test('matches the current page number', () => {
    expect(nav.currentPageItem.pageNumber).toBe(3);
  })
})

// Previous page

describe('navigation with previous page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 3;

  test('reports having a previous page link', () => {
    expect(nav.hasPreviousPageLink()).toBe(true);
  })

  test('returns a previous page link object', () => {
    expect(nav.previousPageLink).toBeInstanceOf(Pagination.PreviousPageLink);
  })

  test('links to the previous page', () => {
    expect(nav.previousPageLink.pageNumber).toBe(2);
  })
})

test('navigation does not have previous page link if current page is first page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 1;
  expect(nav.hasPreviousPageLink()).toBe(false);
})

// Next page

describe('navigation with next page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 3;

  test('reports having next page link', () => {
    expect(nav.hasNextPageLink()).toBe(true);
  })

  test('returns a next page link object', () => {
    expect(nav.nextPageLink).toBeInstanceOf(Pagination.NextPageLink);
  })

  test('links to the next page', () => {
    expect(nav.nextPageLink.pageNumber).toBe(4);
  })
})

test('navigation does not have next page link if current page is last page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 5;
  expect(nav.hasNextPageLink()).toBe(false);
})

// First page

describe('navigation when current page is not first page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 3;

  test('reports having a first page link', () => {
    expect(nav.hasFirstPageLink()).toBe(true);
  })

  test('returns a first page link object', () => {
    expect(nav.firstPageLink).toBeInstanceOf(Pagination.FirstPageLink);
  })

  test('links to the first page', () => {
    expect(nav.firstPageLink.pageNumber).toBe(1);
  })
})

test('navigation does not have first page link if current page is first page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 1;
  expect(nav.hasFirstPageLink()).toBe(false);
})

// Last page

describe('navigation when current page is not last page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 3;

  test('reports having a last page link', () => {
    expect(nav.hasLastPageLink()).toBe(true);
  })

  test('returns a last page link object', () => {
    expect(nav.lastPageLink).toBeInstanceOf(Pagination.LastPageLink);
  })

  test('links to the last page', () => {
    expect(nav.lastPageLink.pageNumber).toBe(5);
  })
})

test('navigation does not have last page link if current page is last page', () => {
  const nav = new Pagination.Navigation('http://example.com/', 5);
  nav.currentPage = 5;
  expect(nav.hasLastPageLink()).toBe(false);
})

// Items

describe('navigation with first, previous, next, and last links', () => {
  const nav = new Pagination.Navigation('http://example.com/', 3);
  nav.currentPage = 2;
  const items = nav.items;

  test('returns 9 nav items', () => {
    expect(items.length).toBe(7);
  })

  test('first item is a link to the first page', () => {
    expect(items[0]).toBeInstanceOf(Pagination.FirstPageLink);
  })

  test('second item is a link to the previous page', () => {
    expect(items[1]).toBeInstanceOf(Pagination.PreviousPageLink);
  })

  test('third item is link to page 1', () => {
    expect(items[2]).toBeInstanceOf(Pagination.PageLink);
    expect(items[2].pageNumber).toBe(1);
  })

  test('fourth item is current page', () => {
    expect(items[3]).toBeInstanceOf(Pagination.CurrentPage);
    expect(items[3].pageNumber).toBe(2);
  })

  test('fifth item is link to page 3', () => {
    expect(items[4]).toBeInstanceOf(Pagination.PageLink);
    expect(items[4].pageNumber).toBe(3);
  })

  test('next-to-last item is a link to the next page', () => {
    expect(items[5]).toBeInstanceOf(Pagination.NextPageLink);
  })

  test('last item is a link to the last page', () => {
    expect(items[6]).toBeInstanceOf(Pagination.LastPageLink);
  })
})
