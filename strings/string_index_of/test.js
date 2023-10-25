const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { receive: 0, expected: 0, args: ['test', 't'] },
  { receive: 1, expected: 1, args: ['some str', 'ome'] },
  { receive: -1, expected: -1, args: ['some str', '11'] },
  { receive: 5, expected: 5, args: ['some str', 'st'] },
  { receive: -1, expected: -1, args: ['fear', 'name'] },
  { receive: -1, expected: -1, args: ['selection', 'night'] },
  { receive: -1, expected: -1, args: ['name', 'night'] },
  { receive: -1, expected: -1, args: ['wash', 'name'] },
  { receive: -1, expected: -1, args: ['blow', 'name'] },
  { receive: 0, expected: 0, args: ['blow', 'blow'] },
  { receive: -1, expected: -1, args: ['minute', 'fear'] },
  { receive: -1, expected: -1, args: ['name', 'selection'] },
  { receive: -1, expected: -1, args: ['silver', 'blow'] },
  { receive: -1, expected: -1, args: ['wash', 'burn'] },
  { receive: -1, expected: -1, args: ['wash', 'name'] },
  { receive: -1, expected: -1, args: ['minute', 'note'] },
  { receive: 0, expected: 0, args: ['minute', 'minute'] },
  { receive: -1, expected: -1, args: ['minute', 'blow'] },
  { receive: -1, expected: -1, args: ['note', 'wash'] },
  { receive: -1, expected: -1, args: ['burn', 'name'] },
  { receive: -1, expected: -1, args: ['note', 'silver'] },
  { receive: -1, expected: -1, args: ['note', 'name'] },
  { receive: -1, expected: -1, args: ['fear', 'wash'] },
  { receive: -1, expected: -1, args: ['burn', 'note'] },
  { receive: -1, expected: -1, args: ['wash', 'blow'] },
  { receive: -1, expected: -1, args: ['blow', 'name'] },
  { receive: 0, expected: 0, args: ['silver', 'silver'] },
  { receive: -1, expected: -1, args: ['blow', 'night'] },
  { receive: -1, expected: -1, args: ['blow', 'silver'] },
  { receive: -1, expected: -1, args: ['wash', 'name'] },
];

runTests(tests, solution);
