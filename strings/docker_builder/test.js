const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 'docker build -t practicum/elixir:1.12.2:alpine -f ./Some/Dockerfile .', args: ['elixir', '1.12.2:alpine', './Some/Dockerfile'] },
  { expected: 'docker build -t practicum/ruby:3.0.2:latest .', args: ['ruby', '3.0.2:latest', ''] },
  { expected: 'docker build -t practicum/clojure:1.1.2:slim .', args: ['clojure', '1.1.2:slim', ''] },
  { expected: 'docker build -t practicum/c++:9.1.2:alpine -f ./flame/Dockerfile .', args: ['c++', '9.1.2:alpine', './flame/Dockerfile'] },
  { expected: 'docker build -t practicum/go:5.2.6:buster -f ./vessel/butter/meeting/cloth/thing/Dockerfile .', args: ['go', '5.2.6:buster', './vessel/butter/meeting/cloth/thing/Dockerfile'] },
  {
    expected: 'docker build -t practicum/js:10.2.9:buster -f ./owner/cough/growth/crack/stage/thing/stop/insurance/Dockerfile .',
    args: ['js', '10.2.9:buster', './owner/cough/growth/crack/stage/thing/stop/insurance/Dockerfile'],
  },
  {
    expected: 'docker build -t practicum/java:2.0.10:latest -f ./sister/servant/story/road/ray/selection/birth/Dockerfile .',
    args: ['java', '2.0.10:latest', './sister/servant/story/road/ray/selection/birth/Dockerfile'],
  },
  { expected: 'docker build -t practicum/php:9.1.7:latest -f ./vessel/butter/meeting/cloth/thing/Dockerfile .', args: ['php', '9.1.7:latest', './vessel/butter/meeting/cloth/thing/Dockerfile'] },
  {
    expected: 'docker build -t practicum/go:6.2.1:latest -f ./harbor/play/stop/question/self/river/tendency/daughter/Dockerfile .',
    args: ['go', '6.2.1:latest', './harbor/play/stop/question/self/river/tendency/daughter/Dockerfile'],
  },
  { expected: 'docker build -t practicum/c#:8.5.2:buster -f ./smash/grass/Dockerfile .', args: ['c#', '8.5.2:buster', './smash/grass/Dockerfile'] },
  { expected: 'docker build -t practicum/c#:4.5.6:cli -f ./back/time/mass/sense/Dockerfile .', args: ['c#', '4.5.6:cli', './back/time/mass/sense/Dockerfile'] },
  {
    expected: 'docker build -t practicum/go:10.7.0:slim -f ./fold/process/hearing/oil/comfort/shade/range/Dockerfile .',
    args: ['go', '10.7.0:slim', './fold/process/hearing/oil/comfort/shade/range/Dockerfile'],
  },
  { expected: 'docker build -t practicum/php:6.2.1:latest -f ./meal/disgust/Dockerfile .', args: ['php', '6.2.1:latest', './meal/disgust/Dockerfile'] },
  { expected: 'docker build -t practicum/c#:6.0.4:slim -f ./rhythm/Dockerfile .', args: ['c#', '6.0.4:slim', './rhythm/Dockerfile'] },
  { expected: 'docker build -t practicum/kotlin:7.3.9:latest .', args: ['kotlin', '7.3.9:latest', ''] },
  { expected: 'docker build -t practicum/php:1.3.2:slim -f ./mine/wood/wound/adjustment/danger/Dockerfile .', args: ['php', '1.3.2:slim', './mine/wood/wound/adjustment/danger/Dockerfile'] },
  { expected: 'docker build -t practicum/c#:7.8.6:alpine -f ./touch/theory/middle/law/Dockerfile .', args: ['c#', '7.8.6:alpine', './touch/theory/middle/law/Dockerfile'] },
  {
    expected: 'docker build -t practicum/go:2.6.0:slim -f ./rest/iron/need/religion/sugar/sex/power/Dockerfile .',
    args: ['go', '2.6.0:slim', './rest/iron/need/religion/sugar/sex/power/Dockerfile'],
  },
  {
    expected: 'docker build -t practicum/go:10.3.1:latest -f ./dust/shame/belief/journey/system/song/offer/Dockerfile .',
    args: ['go', '10.3.1:latest', './dust/shame/belief/journey/system/song/offer/Dockerfile'],
  },
  { expected: 'docker build -t practicum/js:6.6.8:latest -f ./impulse/hour/kick/tendency/wax/Dockerfile .', args: ['js', '6.6.8:latest', './impulse/hour/kick/tendency/wax/Dockerfile'] },
  { expected: 'docker build -t practicum/go:9.1.2:alpine -f ./mine/wood/wound/adjustment/danger/Dockerfile .', args: ['go', '9.1.2:alpine', './mine/wood/wound/adjustment/danger/Dockerfile'] },
  {
    expected: 'docker build -t practicum/dart:7.7.2:buster -f ./rest/iron/need/religion/sugar/sex/power/Dockerfile .',
    args: ['dart', '7.7.2:buster', './rest/iron/need/religion/sugar/sex/power/Dockerfile'],
  },
  { expected: 'docker build -t practicum/python:9.2.10:cli -f ./cough/poison/Dockerfile .', args: ['python', '9.2.10:cli', './cough/poison/Dockerfile'] },
  { expected: 'docker build -t practicum/kotlin:1.6.7:latest -f ./meal/journey/Dockerfile .', args: ['kotlin', '1.6.7:latest', './meal/journey/Dockerfile'] },
  { expected: 'docker build -t practicum/python:8.5.3:buster -f ./smash/grass/Dockerfile .', args: ['python', '8.5.3:buster', './smash/grass/Dockerfile'] },
  {
    expected: 'docker build -t practicum/go:8.7.8:slim -f ./flower/test/hate/harmony/print/interest/animal/music/Dockerfile .',
    args: ['go', '8.7.8:slim', './flower/test/hate/harmony/print/interest/animal/music/Dockerfile'],
  },
  { expected: 'docker build -t practicum/php:9.1.2:alpine -f ./meal/disgust/Dockerfile .', args: ['php', '9.1.2:alpine', './meal/disgust/Dockerfile'] },
  { expected: 'docker build -t practicum/js:6.2.1:latest -f ./harmony/cough/need/Dockerfile .', args: ['js', '6.2.1:latest', './harmony/cough/need/Dockerfile'] },
  { expected: 'docker build -t practicum/haskell:7.3.9:latest -f ./disgust/sex/attempt/page/credit/Dockerfile .', args: ['haskell', '7.3.9:latest', './disgust/sex/attempt/page/credit/Dockerfile'] },
  { expected: 'docker build -t practicum/php:0.1.7:buster -f ./earth/leather/Dockerfile .', args: ['php', '0.1.7:buster', './earth/leather/Dockerfile'] },
];

runTests(tests, solution);
