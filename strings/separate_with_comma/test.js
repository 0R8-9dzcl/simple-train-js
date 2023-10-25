const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: '123,456', args: [123456] },
  { expected: '15,075', args: [15075] },
  { expected: '1,234', args: [1234] },
  { expected: '150', args: [150] },
  { expected: '10', args: [10] },
  { expected: '1', args: [1] },
  { expected: '1,238,592', args: [1238592] },
  { expected: '624,840', args: [624840] },
  { expected: '1,207,914', args: [1207914] },
  { expected: '437,244', args: [437244] },
  { expected: '90,758', args: [90758] },
  { expected: '1,409,778', args: [1409778] },
  { expected: '765,466', args: [765466] },
  { expected: '159,439', args: [159439] },
  { expected: '1,915,732', args: [1915732] },
  { expected: '411,881', args: [411881] },
  { expected: '789,139', args: [789139] },
  { expected: '1,987,149', args: [1987149] },
  { expected: '26,904', args: [26904] },
  { expected: '540,459', args: [540459] },
  { expected: '979,239', args: [979239] },
  { expected: '807,467', args: [807467] },
  { expected: '750,249', args: [750249] },
  { expected: '810,417', args: [810417] },
  { expected: '1,486,452', args: [1486452] },
  { expected: '1,688,479', args: [1688479] },
  { expected: '1,790,497', args: [1790497] },
  { expected: '564,902', args: [564902] },
  { expected: '1,348,884', args: [1348884] },
  { expected: '1,277,696', args: [1277696] },
];

runTests(tests, solution);
