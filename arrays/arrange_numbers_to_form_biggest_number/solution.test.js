const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: '22321', args: [[1, 2, 223]] },
  { expected: '11', args: [[1, 1]] },
  { expected: '1', args: [[1]] },
  { expected: '9908988444332412', args: [[43, 44, 12, 324, 90, 9, 88, 89]] },
  { expected: '6054854654', args: [[54, 546, 548, 60]] },
  { expected: '481428385220219710610', args: [[481, 428, 385, 202, 2, 197, 106, 10]] },
  { expected: '654321', args: [[1, 2, 3, 4, 5, 6]] },
  { expected: '998764543431', args: [[1, 34, 3, 98, 9, 76, 45, 4]] },
  { expected: '955193', args: [[9, 55, 193]] },
  { expected: '60285', args: [[60, 285]] },
  { expected: '451', args: [[451]] },
  { expected: '9043', args: [[90, 3, 4]] },
  { expected: '450', args: [[450]] },
  { expected: '246', args: [[246]] },
  { expected: '44740038278', args: [[400, 447, 38, 278]] },
  { expected: '738233331010', args: [[382, 10, 333, 310, 7]] },
  { expected: '111', args: [[111]] },
  { expected: '93763160', args: [[7, 63, 0, 16, 93]] },
  { expected: '87260238144', args: [[260, 238, 7, 8, 144]] },
  { expected: '151', args: [[151]] },
  { expected: '66322', args: [[66, 2, 32]] },
  { expected: '5228199', args: [[199, 228, 5]] },
  { expected: '38199', args: [[199, 38]] },
  { expected: '7812', args: [[78, 12]] },
  { expected: '343', args: [[343]] },
  { expected: '851221', args: [[8, 221, 51]] },
  { expected: '6541233', args: [[6, 233, 5, 41]] },
  { expected: '40395191', args: [[395, 191, 40]] },
  { expected: '362', args: [[362]] },
  { expected: '89824', args: [[4, 89, 82]] },
  { expected: '4039519181', args: [[395, 181, 40, 19]] },
];

runTests(tests, solution);
