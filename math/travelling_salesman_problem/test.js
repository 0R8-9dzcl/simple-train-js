const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 40320, args: [8] },
  { expected: 24, args: [4] },
  { expected: 1, args: [1] },
  { expected: 1, args: [1] },
  { expected: 5040, args: [7] },
  { expected: 6, args: [3] },
  { expected: 362880, args: [9] },
  { expected: 1, args: [0] },
  { expected: 2, args: [2] },
  { expected: 120, args: [5] },
  { expected: 24, args: [4] },
  { expected: 2, args: [2] },
  { expected: 1, args: [0] },
  { expected: 1, args: [0] },
  { expected: 362880, args: [9] },
  { expected: 24, args: [4] },
  { expected: 24, args: [4] },
  { expected: 720, args: [6] },
  { expected: 362880, args: [9] },
  { expected: 362880, args: [9] },
  { expected: 1, args: [0] },
  { expected: 5040, args: [7] },
  { expected: 1, args: [0] },
  { expected: 40320, args: [8] },
  { expected: 720, args: [6] },
  { expected: 1, args: [0] },
  { expected: 1, args: [1] },
  { expected: 362880, args: [9] },
  { expected: 40320, args: [8] },
  { expected: 5040, args: [7] },
];

runTests(tests, solution);
