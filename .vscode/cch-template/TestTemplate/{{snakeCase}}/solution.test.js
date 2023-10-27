const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
	{args: [], expected: true}
];

runTests(tests, solution)
