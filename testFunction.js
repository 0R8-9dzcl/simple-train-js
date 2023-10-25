const deepEqual = require("./deepEqual");

/**
 * 
 * @param {array} tests - массив параметров тестов
 * @param {function} solution - функция для решения 
 */
const runTests = (tests, solution) => {
  let passedCount = 0;

  const green = (text) => `\x1b[32m${text}\x1b[0m`;
  const red = (text) => `\x1b[31m${text}\x1b[0m`;

  for (const test of tests) {
    const result = solution(...test.args);
    const pass = deepEqual( test.expected, result); // Сравниваем объекты по ключам и значениям

    const stringResult = JSON.stringify(result);
    const stringExpected = JSON.stringify(test.expected);
    const stringArgs = Array.isArray(test.args) ? JSON.stringify(test.args) : String(test.args);

    const status = pass ? green('Success') : red('Failed');
    if (pass) {
      passedCount++;
    }
    console.log(`${status}. Receive: [${stringResult}], Expected: [${stringExpected}], Arguments: ${stringArgs}`);
  }

  const passPercentage = (passedCount / tests.length) * 100;
  console.log(`Passed ${passedCount} out of ${tests.length} tests (${passPercentage.toFixed(2)}%)`);
};

module.exports = runTests
