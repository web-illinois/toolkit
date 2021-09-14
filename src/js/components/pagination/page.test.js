const Page = require('./page');

test('page number', () => {
  const page = new Page(1, 1);
  expect(page.number).toBe(1);
});

test('page number as string', () => {
  const page = new Page('1', 1);
  expect(page.number).toBe(1);
});

test('page count', () => {
  const page = new Page(1, 3);
  expect(page.pageCount).toBe(3);
});

test('page count as string', () => {
  const page = new Page(1, '3');
  expect(page.pageCount).toBe(3);
});

test('is first page', () => {
  const page = new Page(1, 3);
  expect(page.isFirst()).toBe(true);
});

test('is not first page', () => {
  const page = new Page(2, 3);
  expect(page.isFirst()).toBe(false);
});

test('is last page', () => {
  const page = new Page(3, 3);
  expect(page.isLast()).toBe(true);
});

test('is not last page', () => {
  const page = new Page(2, 3);
  expect(page.isLast()).toBe(false);
});

test('has previous page', () => {
  const page = new Page(2, 3);
  expect(page.hasPrevious()).toBe(true);
});

test('does not have previous page', () => {
  const page = new Page(1, 3);
  expect(page.hasPrevious()).toBe(false);
});

test('get previous page', () => {
  const page = new Page(2, 3);
  expect(page.previous()).toBe(1);
});

test('has next page', () => {
  const page = new Page(2, 3);
  expect(page.hasNext()).toBe(true);
});

test('does not have next page', () => {
  const page = new Page(3, 3);
  expect(page.hasNext()).toBe(false);
});

test('get next page', () => {
  const page = new Page(2, 3);
  expect(page.next()).toBe(3);
});

