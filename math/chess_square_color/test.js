const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 'white', args: ['E', 4] },
  { expected: 'white', args: ['E', 8] },
  { expected: 'white', args: ['H', 1] },
  { expected: 'white', args: ['A', 8] },
  { expected: 'black', args: ['G', 7] },
  { expected: 'black', args: ['D', 4] },
  { expected: 'black', args: ['H', 8] },
  { expected: 'black', args: ['A', 1] },
  { expected: 'black', args: ['H', 6] },
  { expected: 'white', args: ['H', 3] },
  { expected: 'black', args: ['E', 3] },
  { expected: 'white', args: ['H', 3] },
  { expected: 'black', args: ['A', 1] },
  { expected: 'black', args: ['B', 2] },
  { expected: 'white', args: ['D', 1] },
  { expected: 'black', args: ['H', 2] },
  { expected: 'black', args: ['E', 5] },
  { expected: 'white', args: ['E', 6] },
  { expected: 'white', args: ['D', 5] },
  { expected: 'white', args: ['H', 7] },
  { expected: 'black', args: ['B', 8] },
  { expected: 'white', args: ['A', 2] },
  { expected: 'black', args: ['B', 2] },
  { expected: 'white', args: ['D', 7] },
  { expected: 'white', args: ['B', 7] },
  { expected: 'black', args: ['C', 7] },
  { expected: 'white', args: ['B', 7] },
  { expected: 'white', args: ['C', 4] },
  { expected: 'white', args: ['E', 2] },
  { expected: 'black', args: ['D', 6] },
];

runTests(tests, solution);
