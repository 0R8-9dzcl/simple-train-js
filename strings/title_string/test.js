const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { args: ['There are three types of zeros in JS!'], expected: false },
  { args: ['jump example guide theory cry friend comparison?!'], expected: false },
  { args: ['weight mine substance stone color building metal shame advertisement roll?!'], expected: false },
  { args: ['Learn Clojure Be Happy!'], expected: true },
  { args: ['Learn Ruby win tournaments?!'], expected: false },
  { args: ['Simple Title.'], expected: true },
  { args: ['jump example guide theory cry friend comparison?!'], expected: false },
  { args: ['father ice fruit shade debt fear winter?'], expected: false },
  { args: ['place grass purpose gold attraction turn loss scale birth trouble mark...'], expected: false },
  { args: ['Prose Suggestion Punishment Art Steel Power End Wind Belief Rhythm Religion.'], expected: true },
  { args: ['Cook Soup Fruit Color Sky Gold Song Motion Sense Burn!'], expected: true },
  { args: ['Silk River Blood Experience Attraction Linen Danger Regret?!'], expected: true },
  { args: ['Fiction Machine Grain Authority Month Linen Produce Music Work Law Education Sleep Transport?'], expected: true },
  { args: ['Rhythm Field Connection Manager Substance Flower Flame Middle Steel Wave?'], expected: true },
  { args: ['Direction Death Copper Touch Hearing Religion...'], expected: true },
  { args: ['Road Destruction Degree Cook Birth Join Liquid Sky Glass Sense Discussion Jelly Observation...'], expected: true },
];

runTests(tests, solution)
