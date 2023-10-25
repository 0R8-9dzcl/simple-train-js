const deepEqual = (expected, result) => {
  const isNull = (value) => value === null;
  const isObject = (value) => typeof value === 'object' && value !== null;
  const isArray = (value) => Array.isArray(value);
  const isFunction = (value) => typeof value === 'function';

  const compareArrays = (expectedArray, resultArray) => {
    if (expectedArray.length !== resultArray.length) {
      return false;
    }

    return !expectedArray.some((expectedValue, index) => {
			return !deepEqual(expectedValue, resultArray[index]);
		});
  };

  const compareObjects = (expectedObj, resultObj) => {
    const expectedKeys = Object.keys(expectedObj);
    const resultKeys = Object.keys(resultObj);

    if (expectedKeys.length !== resultKeys.length) {
      return false;
    }

    return !expectedKeys.some((key) => {
			return !deepEqual(expectedObj[key], resultObj[key]);
		});
  };

  if (isNull(expected)) {
    return isNull(result);
  }

  if (isFunction(expected)) {
    return isFunction(result) && expected.toString() === result.toString();
  }

  if (isObject(expected)) {
    return isObject(result) && compareObjects(expected, result);
  }

  if (isArray(expected)) {
    return isArray(result) && compareArrays(expected, result);
  }

  return expected === result;
};

module.exports = deepEqual;
