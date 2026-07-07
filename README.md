# testing-practice

A small collection of JavaScript utilities, each paired with a Jest test suite. Built as a hands-on exercise for TDD-style development.

## Features

- **`capitalize(str)`** — uppercases the first character of a string.
- **`reverseString(str)`** — returns the string reversed (unicode-safe via spread).
- **`calculator`** — an object exposing `add`, `subtract`, `multiply`, `divide` for two-number arithmetic.
- **`caesarCipher(str, shift)`** — shifts every letter by `shift`; preserves case, leaves non-alphabetical characters untouched, and wraps from `z` to `a`.
- **`analyzeArray(numbers)`** — returns `{ average, min, max, length }` for a numeric array.

## Installation

```bash
npm install
```

This installs Jest, `babel-jest`, and `@babel/preset-env` declared in `package.json`.

## Usage

Each module is exported via CommonJS:

```js
const capitalize     = require('./capitalize');
const reverseString  = require('./reverseString');
const calculator     = require('./calculator');
const caesarCipher   = require('./caesarCipher');
const analyzeArray   = require('./analyzeArray');

capitalize('hello');                       // 'Hello'
reverseString('hello');                    // 'olleh'
calculator.add(2, 3);                      // 5
caesarCipher('Hello, World!', 3);          // 'Khoor, Zruog!'
analyzeArray([1, 8, 3, 4, 2, 6]);          // { average: 4, min: 1, max: 8, length: 6 }
```

## Running tests

```bash
npx jest
```

Each utility has a matching test file under `__tests__/`. The current suite is 17 passing tests across 5 files.

> [!TIP]
> During development, `npx jest --watch` reruns only the tests affected by file changes.

> [!NOTE]
> `package.json` does not yet declare a `test` script, so `npm test` exits with an error. Use `npx jest` directly, or add `"test": "jest"` to `scripts`.

## Project structure

```
.
├── .gitignore
├── babel.config.js
├── package.json
├── capitalize.js
├── reverseString.js
├── calculator.js
├── caesarCipher.js
├── analyzeArray.js
└── __tests__/
    ├── capitalize.test.js
    ├── reverseString.test.js
    ├── calculator.test.js
    ├── caesarCipher.test.js
    └── analyzeArray.test.js
```

## Tech stack

- ![javascript](https://img.shields.io/badge/-Javasciript-blue?style=for-the-badge&logo=javascript&logoColor=%230049AB)
- ![Jest](https://img.shields.io/badge/-Jest-red?style=for-the-badge&logo=jest&logoColor=%23F1DEC4&logoSize=50px) — test runner
- ![Babel](https://img.shields.io/badge/-Jest-yellow?style=for-the-badge&logo=babel&logoColor=%230B1849&logoSize=50px) with `@babel/preset-env` — syntax transform
- `babel-jest` — wires Babel into Jest
