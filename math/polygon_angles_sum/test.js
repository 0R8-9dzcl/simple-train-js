const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 720, args: [6] },
  { expected: 360, args: [4] },
  { expected: 180, args: [3] },
  { expected: 720, args: [6] },
  { expected: 2700, args: [17] },
  { expected: 720, args: [6] },
  { expected: 1800, args: [12] },
  { expected: 2700, args: [17] },
  { expected: 1620, args: [11] },
  { expected: 180, args: [3] },
  { expected: 720, args: [6] },
  { expected: 1260, args: [9] },
  { expected: 540, args: [5] },
  { expected: 2880, args: [18] },
  { expected: 3240, args: [20] },
  { expected: 3240, args: [20] },
  { expected: 3240, args: [20] },
  { expected: 180, args: [3] },
  { expected: 1080, args: [8] },
  { expected: 3240, args: [20] },
  { expected: 900, args: [7] },
  { expected: 2520, args: [16] },
  { expected: 1620, args: [11] },
  { expected: 1800, args: [12] },
  { expected: 2160, args: [14] },
  { expected: 360, args: [4] },
  { expected: 900, args: [7] },
  { expected: 180, args: [3] },
  { expected: 1440, args: [10] },
  { expected: 1080, args: [8] },
];

runTests(tests, solution);
