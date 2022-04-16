# cartesian
Computes the cartesian product of arrays

## Examples

```javascript
const { cartesian } = require('@agarimo/cartesian');
const input = [[1, 2], [3, 4, 5], [6], [7, 8]];
const actual = cartesian(input);
console.log(actual);
// [
//   [ 1, 3, 6, 7 ], [ 1, 3, 6, 8 ],
//   [ 1, 4, 6, 7 ], [ 1, 4, 6, 8 ],
//   [ 1, 5, 6, 7 ], [ 1, 5, 6, 8 ],
//   [ 2, 3, 6, 7 ], [ 2, 3, 6, 8 ],
//   [ 2, 4, 6, 7 ], [ 2, 4, 6, 8 ],
//   [ 2, 5, 6, 7 ], [ 2, 5, 6, 8 ]
// ]
```

You can have elements that are not an array

```javascript
const { cartesian } = require('@agarimo/cartesian');
const input = [[1, 2], [3, 4, 5], 6, [7, 8]];
const actual = cartesian(input);
console.log(actual);
// [
//   [ 1, 3, 6, 7 ], [ 1, 3, 6, 8 ],
//   [ 1, 4, 6, 7 ], [ 1, 4, 6, 8 ],
//   [ 1, 5, 6, 7 ], [ 1, 5, 6, 8 ],
//   [ 2, 3, 6, 7 ], [ 2, 3, 6, 8 ],
//   [ 2, 4, 6, 7 ], [ 2, 4, 6, 8 ],
//   [ 2, 5, 6, 7 ], [ 2, 5, 6, 8 ]
// ]
```