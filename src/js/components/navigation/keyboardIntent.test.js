const KeyboardIntent = require('./keyboardIntent');

test("escape", () => {
  const intent = new KeyboardIntent({key: 'Escape'});
  expect(intent.isEscape()).toBeTruthy();
})

test("advance to next item", () => {
  const intent = new KeyboardIntent({key: 'ArrowDown'});
  expect(intent.isGoToNext()).toBeTruthy();
})

test("advance to previous item", () => {
  const intent = new KeyboardIntent({key: 'ArrowUp'});
  expect(intent.isGoToPrevious()).toBeTruthy();
})

