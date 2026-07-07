const capitalize = require('../capitalize');

test('capitalizes first character', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('h')).toBe('H');
});

test('leaves already-capitalized strings unchanged', () => {
  expect(capitalize('Hello')).toBe('Hello');
  expect(capitalize('HELLO')).toBe('HELLO');
});

test('returns empty string unchanged', () => {
  expect(capitalize('')).toBe('');
});
