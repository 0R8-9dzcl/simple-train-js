const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 21, args: [2055] },
  { expected: 19, args: [1900] },
  { expected: 20, args: [1950] },
  { expected: 21, args: [2005] },
  { expected: 25, args: [2415] },
  { expected: 23, args: [2275] },
  { expected: 30, args: [2910] },
  { expected: 22, args: [2159] },
  { expected: 27, args: [2685] },
  { expected: 26, args: [2577] },
  { expected: 22, args: [2171] },
  { expected: 25, args: [2431] },
  { expected: 20, args: [1974] },
  { expected: 29, args: [2869] },
  { expected: 20, args: [1938] },
  { expected: 30, args: [2984] },
  { expected: 29, args: [2843] },
  { expected: 24, args: [2376] },
  { expected: 23, args: [2204] },
  { expected: 27, args: [2672] },
  { expected: 25, args: [2439] },
  { expected: 24, args: [2387] },
  { expected: 23, args: [2288] },
  { expected: 21, args: [2020] },
  { expected: 22, args: [2102] },
  { expected: 29, args: [2879] },
  { expected: 25, args: [2442] },
  { expected: 25, args: [2472] },
  { expected: 21, args: [2075] },
  { expected: 30, args: [2998] },
];

runTests(tests, solution);
