const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: [0, 1, 2, 3, 4], args: [[0, 1, 2, 3, 4]] },
  { expected: [3, 11, 15, 16], args: [[1, 3, 1, 6, 9, 11, 13, 15, 16]] },
  { expected: [3, 6], args: [[1, 2, 3, 3, 5, 6, 6]] },
  { expected: [3, 2, 5], args: [[1, 3, 2, 5, 5]] },
  { expected: [0], args: [[1, 2, 3]] },
  { expected: [-7, 0, 11, -18, -7, -12, -20, 4], args: [[1, -7, 0, 11, 15, 16, -18, -7, 17, -4, -12, 18, -20, -12, 4]] },
  { expected: [7, 12, 7, -8, 20, -2, 1, -14], args: [[7, 7, 12, 7, -8, -12, 20, -14, -7, -6, -5, 2, -2, 1, -14, 20]] },
  { expected: [-1, 11, 12, -14, -17, 18, 17, 2, 17], args: [[19, -1, -7, 11, 12, -4, -14, -17, 18, 17, 2, 8, -7, 17, -5, -14, 15]] },
  { expected: [-11, 12, -20, -3, -16, 4, 3, 10], args: [[-19, -14, -11, -11, 12, -10, 15, 10, -20, -3, -16, -4, 4, 3, 15, -6, 10, -14]] },
  { expected: [-16, -7, -5, -9, -18, 7, -8], args: [[-16, -20, 7, -7, 9, -5, -17, 18, -7, -9, -18, -8, -5, 14, 9, 7, -8]] },
  { expected: [12, 8, 3, 14, -12, 15, 15, -18, -1, -19], args: [[12, -14, 8, 3, 7, 6, 14, -6, -12, 15, -9, 15, -18, -8, 3, -2, -19, 18, 5, -1, -13, -19, 13]] },
  { expected: [-12, 5, 0, 17, 14, 1, 18, 0, 13, 13, -17, 0, 13, 10, -15], args: [[-12, 5, 0, 17, 14, 1, 18, -20, 0, 13, -13, 13, 5, -17, 0, 13, 10, -12, 15, -15]] },
  { expected: [-3, -5, 16, -6, -11, 12, -3, 4, -17, -4, -17, 7], args: [[-17, -3, 11, 0, 17, -6, -5, -5, 16, -18, -17, -18, 9, 12, -6, -11, 12, -3, 4, -17, -4, -17, 11, 7]] },
  { expected: [-4, -11, -12, -19, 10, -18, -14, -5, 4, 0], args: [[-4, -11, -12, -19, 10, -6, -18, -2, -14, -10, 3, -5, 4, 2, 0, -2]] },
  { expected: [2, 17, -4, 13, 17, 18, -11, 8, -15, 10], args: [[-13, -2, -13, -2, 7, 20, 19, 12, 2, 17, -4, -12, 15, 13, -19, 17, 18, -12, 7, -11, 8, -15, 10]] },
  { expected: [0, 13, -7, -20, -7, 12, 18, -10, -17, 20, -16, 18], args: [[19, -12, 0, 13, 7, -10, 11, -7, -20, -7, 12, 10, 18, 4, -10, -17, 20, -12, -16, -12, 18]] },
  { expected: [-20, -16, -1, -2, 14, 0, 19, 20], args: [[5, -4, -20, 0, -16, -4, 3, -1, -2, 16, 14, -4, 0, 19, -13, 16, 20]] },
  { expected: [2, -4, 17, -20, 1, -19, 6, 18, -11, -11, 12, 9], args: [[2, -10, -4, 17, -20, 1, 1, -19, 6, 0, 18, -11, 17, -11, 12, 9]] },
  { expected: [3, 6, 15, 18, -9, 4, 13, -12, 13, -17, 8, 11, 17, 14], args: [[17, -18, 13, 3, 6, -18, 11, 15, 18, -9, 4, 13, -12, 13, -13, -17, 8, 11, -13, 17, 14, -20, 11]] },
  { expected: [16, 15, 10, -14, 4, -20, 11, -4], args: [[16, 15, 10, -14, -14, 8, -1, 18, -15, -8, 4, 14, -20, 12, -9, 11, 5, -8, -4, 6, -13, 14, -7]] },
  { expected: [-12, -7, 14, 2, -19, -9, 14, -5, -15, -12, -7, 10, 15, -19], args: [[-12, -7, 15, 10, 14, 6, 2, -6, 19, -19, 13, -9, 14, -5, 11, -15, -12, -7, 10, 15, -5, -19]] },
  { expected: [16, 1, -6, 1, 10, -9, 14, 17, -8, 12, 0], args: [[16, 1, -6, 1, 10, -9, -11, 12, 14, 17, -8, 14, 12, -4, 0]] },
  { expected: [4, 15, 12, -5, -9, 12, 11], args: [[4, -6, -19, -18, 11, -18, -3, 15, 12, -5, 15, -9, -5, -20, 12, 11]] },
  { expected: [16, -6, 6, 2, -19, 0, 4, 8, 7, 0, 12, 9], args: [[16, 2, -6, -12, 6, 16, 2, -19, 0, 18, 4, 16, 8, 0, -11, 7, 0, -20, 12, 9]] },
  { expected: [3, 6, 17, 19, 11, -6, -19, 4], args: [[-5, 3, -7, 8, 6, 17, 17, 2, 3, 19, 9, 11, -6, -18, -13, -19, -5, 20, 4, -4, 17, -8, -7, 14]] },
  { expected: [-15, 1, -7, 11, -12, 10, 11, -2, -15, -12], args: [[9, -15, 7, 1, 13, -7, 11, 11, -12, 20, 10, 11, -2, 2, -3, -15, -12]] },
  { expected: [0, 19, 5, 14, 12, 1, 14, 17, 2, -11, 0, 12, 10, -1], args: [[0, 19, 3, 5, 14, -8, 12, 1, 14, 17, -19, 4, -3, 12, -9, 20, 2, -11, 0, 6, 12, 18, 10, -1]] },
  { expected: [-18, -3, 6, 8, 1, 16, -7, 4, -7, -10, -7], args: [[-18, -3, 6, 18, -9, -14, 8, -6, 1, 1, 16, -7, 17, -2, 4, -7, -10, -7]] },
  { expected: [0, 7, -8, -8, -13, -8], args: [[-11, 16, 0, 7, -11, -8, -8, 8, 5, -16, -15, -16, -8, -13, -8]] },
  { expected: [-10, 20, -20, 5, 20, 9, 8, -10, -13, 0, 18, 1], args: [[-11, -2, -10, -10, 20, 10, 5, 12, -20, 5, 20, -12, -3, 9, 8, -20, -10, -13, 0, 14, 18, 1]] },
];

runTests(tests, solution);
