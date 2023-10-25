const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 24568, args: ['AJHX'] },
  { expected: 2458, args: ['CPN'] },
  { expected: 1, args: ['A'] },
  { expected: 26, args: ['Z'] },
  { expected: 666, args: ['YP'] },
  { expected: 29, args: ['AC'] },
  { expected: 5836, args: ['HPL'] },
  { expected: 213518, args: ['LCVF'] },
  { expected: 49, args: ['AW'] },
  { expected: 13875, args: ['TMQ'] },
  { expected: 9327, args: ['MTS'] },
  { expected: 224005, args: ['LSIO'] },
  { expected: 469459, args: ['ZRLC'] },
  { expected: 164036, args: ['IHQB'] },
  { expected: 96, args: ['CR'] },
  { expected: 382492, args: ['USUF'] },
  { expected: 1836, args: ['BRP'] },
  { expected: 25, args: ['Y'] },
  { expected: 2, args: ['B'] },
  { expected: 135384, args: ['GRGB'] },
  { expected: 35, args: ['AI'] },
  { expected: 95, args: ['CQ'] },
  { expected: 10, args: ['J'] },
  { expected: 240, args: ['IF'] },
  { expected: 7, args: ['G'] },
  { expected: 406, args: ['OP'] },
  { expected: 5291, args: ['GUM'] },
  { expected: 5788, args: ['HNP'] },
  { expected: 210290, args: ['KYBB'] },
  { expected: 8907, args: ['MDO'] },
];

runTests(tests, solution);
