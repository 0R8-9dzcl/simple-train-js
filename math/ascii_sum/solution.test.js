const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 864, args: ['frontend'] },
  { expected: 756, args: ['clojure'] },
  { expected: 448, args: ['test'] },
  { expected: 1081, args: ['attraction'] },
  { expected: 444, args: ['jump'] },
  { expected: 429, args: ['milk'] },
  { expected: 411, args: ['care'] },
  { expected: 539, args: ['brass'] },
  { expected: 440, args: ['iron'] },
  { expected: 332, args: ['ray'] },
  { expected: 444, args: ['jump'] },
  { expected: 428, args: ['rate'] },
  { expected: 536, args: ['drink'] },
  { expected: 875, args: ['mountain'] },
  { expected: 424, args: ['food'] },
  { expected: 875, args: ['mountain'] },
  { expected: 518, args: ['death'] },
  { expected: 853, args: ['reaction'] },
  { expected: 549, args: ['crush'] },
  { expected: 437, args: ['look'] },
  { expected: 541, args: ['paste'] },
  { expected: 455, args: ['snow'] },
  { expected: 422, args: ['sand'] },
  { expected: 541, args: ['paste'] },
  { expected: 428, args: ['rate'] },
  { expected: 975, args: ['amusement'] },
  { expected: 878, args: ['interest'] },
  { expected: 439, args: ['burn'] },
  { expected: 539, args: ['brass'] },
  { expected: 875, args: ['mountain'] },
];

runTests(tests, solution);
