const { cartesian } = require('../src');

describe('cartesian', () => {
  it('Should calculate cartesian product of terms of an array', () => {
    const input = [[1, 2], [3, 4, 5], [6], [7, 8]];
    const actual = cartesian(input);
    const expected = [
      [1, 3, 6, 7],
      [1, 3, 6, 8],
      [1, 4, 6, 7],
      [1, 4, 6, 8],
      [1, 5, 6, 7],
      [1, 5, 6, 8],
      [2, 3, 6, 7],
      [2, 3, 6, 8],
      [2, 4, 6, 7],
      [2, 4, 6, 8],
      [2, 5, 6, 7],
      [2, 5, 6, 8],
    ];
    expect(actual).toEqual(expected);
  });
  it('Should calculate cartesian product of terms even if a term is not an array', () => {
    const input = [[1, 2], [3, 4, 5], 6, [7, 8]];
    const actual = cartesian(input);
    const expected = [
      [1, 3, 6, 7],
      [1, 3, 6, 8],
      [1, 4, 6, 7],
      [1, 4, 6, 8],
      [1, 5, 6, 7],
      [1, 5, 6, 8],
      [2, 3, 6, 7],
      [2, 3, 6, 8],
      [2, 4, 6, 7],
      [2, 4, 6, 8],
      [2, 5, 6, 7],
      [2, 5, 6, 8],
    ];
    expect(actual).toEqual(expected);
  });
});
