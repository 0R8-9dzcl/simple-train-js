const deepEqual = (expected, result) => {
  if (expected === null) {
    return result === null;
  }

  if (result === null) {
    return false;
  }
  
  if (typeof expected === 'number') {
    return typeof result === 'number' && expected === result;
  }

  if (typeof expected === 'string') {
    return typeof result === 'string' && expected === result;
  }

  if (typeof expected === 'boolean') {
    return typeof result === 'boolean' && expected === result;
  }

  if (Array.isArray(expected)) {
    return Array.isArray(result) && expected.length === result.length && !expected.some((value, index) => !deepEqual(value, result[index]));
  }

  if (typeof expected === 'object') {
    if (typeof result !== 'object') {
      return false;
    }

    const expectedKeys = Object.keys(expected);
    const resultKeys = Object.keys(result);

    if (expectedKeys.length !== resultKeys.length) {
      return false;
    }

    for (const key of expectedKeys) {
      if (!resultKeys.includes(key) || !deepEqual(expected[key], result[key])) {
        return false;
      }
    }

    return true;
  }

  return expected === result;
};

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
    const args = Array.isArray(test.args) ? test.args.join(', ') : String(test.args);
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
