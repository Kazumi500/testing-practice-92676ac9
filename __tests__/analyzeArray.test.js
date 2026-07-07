const analyzeArray = require('../analyzeArray');

describe('analyzeArray', () => {
  test('returns average, min, max, and length for the example array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('handles a single-element array', () => {
    expect(analyzeArray([42])).toEqual({
      average: 42,
      min: 42,
      max: 42,
      length: 1,
    });
  });
});
