const PageUrl = require('./url');

test('page url with default param name', () => {
  const page = new PageUrl('http://example.com/');
  expect(page.toString()).toBe('http://example.com/?page=1');
})

test('page url with default param name', () => {
  const page = new PageUrl('http://example.com/', 3);
  expect(page.toString()).toBe('http://example.com/?page=3');
})

test('page url with custom param name', () => {
  const page = new PageUrl('http://example.com/', { p: 2 });
  expect(page.toString()).toBe('http://example.com/?p=2');
})

test('page url with additional params', () => {
  const page = new PageUrl('http://example.com/?one=1&two=2', 3);
  expect(page.toString()).toBe('http://example.com/?one=1&two=2&page=3');
})

test('page url with existing page param', () => {
  const page = new PageUrl('http://example.com/?page=1&one=1&two=2', 3);
  expect(page.toString()).toBe('http://example.com/?page=3&one=1&two=2');
})

test('page url with existing custom page param', () => {
  const page = new PageUrl('http://example.com/?p=1&one=1&two=2', { p: 3 });
  expect(page.toString()).toBe('http://example.com/?p=3&one=1&two=2');
})
