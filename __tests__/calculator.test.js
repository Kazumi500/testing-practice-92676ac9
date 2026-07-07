const calculator = require('../calculator');

test('add sums two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 1)).toBe(0);
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('subtract returns the difference', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
  expect(calculator.subtract(0, 5)).toBe(-5);
});

test('multiply returns the product', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.multiply(-2, 5)).toBe(-10);
});

test('divide returns the quotient', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(7, 2)).toBe(3.5);
});
