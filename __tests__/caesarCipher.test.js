const caesarCipher = require('../caesarCipher');

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves lettercase', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('leaves punctuation, spaces, and non-alphabetical characters unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('shifts the full alphabet with single-end wrap', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1))
    .toBe('bcdefghijklmnopqrstuvwxyza');
});
