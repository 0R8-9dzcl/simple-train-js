const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { args: [70, 50, 360], expected: 3 },
  { args: [30, 40, 140], expected: 2 },
  { args: [50, 50, 100], expected: 1 },
  { args: [1, 1, 2], expected: 1 },
  { args: [1, 2, 3], expected: 1 },
  { args: [3, 2, 10], expected: 2 },
  { args: [2, 3, 15], expected: 3 },
  { args: [5, 4, 45], expected: 5 },
  { args: [5, 5, 50], expected: 5 },
  { args: [1, 1, 12], expected: 6 },
  { args: [8, 2, 30], expected: 3 },
  { args: [2, 7, 63], expected: 7 },
  { args: [6, 9, 30], expected: 2 },
  { args: [9, 4, 130], expected: 10 },
  { args: [5, 9, 168], expected: 12 },
  { args: [3, 7, 40], expected: 4 },
  { args: [12, 9, 273], expected: 13 },
  { args: [15, 9, 264], expected: 11 },
  { args: [9, 3, 180], expected: 15 },
  { args: [5, 16, 231], expected: 11 },
  { args: [2, 7, 162], expected: 18 },
  { args: [12, 4, 288], expected: 18 },
  { args: [10, 4, 280], expected: 20 },
  { args: [10, 12, 132], expected: 6 },
  { args: [22, 4, 468], expected: 18 },
  { args: [18, 20, 418], expected: 11 },
  { args: [3, 22, 425], expected: 17 },
  { args: [24, 1, 500], expected: 20 },
  { args: [13, 1, 266], expected: 19 },
  { args: [18, 2, 460], expected: 23 },
  { args: [18, -18, 1], expected: null },
  { args: [0, 0, 460], expected: null }
];

runTests(tests, solution)
