const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { args: [4, 3, 2], expected: 5 },
  { args: [10, 10, 0], expected: 10 },
  { args: [3, 6, 8], expected: 5 },
  { args: [9, 9, 12], expected: 15 },
  { args: [18, 36, 48], expected: 30 },
  { args: [9, 9, 12], expected: 15 },
  { args: [9, 27, 36], expected: 15 },
  { args: [45, 90, 120], expected: 75 },
  { args: [36, 108, 144], expected: 60 },
  { args: [45, 225, 300], expected: 75 },
  { args: [18, 72, 96], expected: 30 },
  { args: [18, 162, 216], expected: 30 },
  { args: [45, 90, 120], expected: 75 },
  { args: [18, 54, 72], expected: 30 },
  { args: [90, 990, 1320], expected: 150 },
  { args: [90, 270, 360], expected: 150 },
  { args: [117, 351, 468], expected: 195 },
  { args: [117, 351, 468], expected: 195 },
  { args: [45, 270, 360], expected: 75 },
  { args: [90, 1260, 1680], expected: 150 },
  { args: [27, 135, 180], expected: 45 },
  { args: [135, 1080, 1440], expected: 225 },
  { args: [45, 315, 420], expected: 75 },
  { args: [72, 72, 96], expected: 120 },
  { args: [90, 990, 1320], expected: 150 },
  { args: [126, 2394, 3192], expected: 210 },
  { args: [162, 810, 1080], expected: 270 },
  { args: [216, 4752, 6336], expected: 360 },
  { args: [144, 2736, 3648], expected: 240 },
  { args: [171, 684, 912], expected: 285 }
];

runTests(tests, solution)
