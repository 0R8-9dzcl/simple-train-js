const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 58, args: [-14, -10, -12] },
  { expected: 58, args: [14, 10, 12] },
  { expected: 216, args: [24, 30, 18] },
  { expected: 0, args: [6, 5, 27] },
  { expected: 0, args: [22, 5, 2] },
  { expected: 189, args: [20, 28, 19] },
  { expected: 0, args: [12, 29, 0] },
  { expected: 135, args: [23, 28, 12] },
  { expected: 0, args: [13, 24, 0] },
  { expected: 0, args: [0, 4, 25] },
  { expected: 183, args: [27, 23, 16] },
  { expected: 0, args: [0, 18, 23] },
  { expected: 0, args: [8, 19, 4] },
  { expected: 0, args: [13, 29, 11] },
  { expected: 0, args: [6, 25, 7] },
  { expected: 208, args: [21, 22, 23] },
  { expected: 0, args: [26, 4, 9] },
  { expected: 0, args: [8, 23, 10] },
  { expected: 70, args: [6, 24, 26] },
  { expected: 0, args: [9, 2, 18] },
  { expected: 49, args: [13, 15, 27] },
  { expected: 0, args: [5, 19, 14] },
  { expected: 23, args: [4, 12, 12] },
  { expected: 226, args: [30, 29, 16] },
  { expected: 0, args: [6, 1, 25] },
  { expected: 135, args: [23, 17, 16] },
  { expected: 84, args: [25, 8, 30] },
  { expected: 54, args: [10, 12, 12] },
  { expected: 0, args: [29, 13, 6] },
  { expected: 242, args: [22, 23, 27] },
];

runTests(tests, solution);
