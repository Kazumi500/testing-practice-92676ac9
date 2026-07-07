const reverseString = require('../reverseString');

test('reverses a regular word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a sentence', () => {
  expect(reverseString('the quick fox')).toBe('xof kciuq eht');
});

test('handles a single character', () => {
  expect(reverseString('a')).toBe('a');
});

test('returns empty string unchanged', () => {
  expect(reverseString('')).toBe('');
});
