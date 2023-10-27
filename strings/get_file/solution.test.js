const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 'Beethoven_5.mp3', args: ['C:/Users/JohnDoe/Music/Beethoven_5.mp3'] },
  { expected: 'brain-games.exe', args: ['C:/brain-games.exe'] },
  { expected: 'something.txt', args: ['C:/Projects/tests/texts/something.txt'] },
  { expected: 'back.pdf', args: ['C:/comfort/back.pdf'] },
  { expected: 'breath.png', args: ['C:/competition/bite/breath.png'] },
  { expected: 'back.pdf', args: ['C:/comfort/back.pdf'] },
  { expected: 'attack.png', args: ['C:/brass/group/tin/loss/dust/experience/attack.png'] },
  { expected: 'breath.png', args: ['C:/competition/bite/breath.png'] },
  { expected: 'room', args: ['C:/record/room'] },
  { expected: 'back.pdf', args: ['C:/comfort/back.pdf'] },
  { expected: 'polish.pdf', args: ['C:/week/polish.pdf'] },
  { expected: 'news.pdf', args: ['C:/produce/crush/substance/division/credit/guide/middle/news.pdf'] },
  { expected: 'question.exe', args: ['C:/blow/jump/verse/history/need/note/gold/question.exe'] },
  { expected: 'question.exe', args: ['C:/blow/jump/verse/history/need/note/gold/question.exe'] },
  { expected: 'voice.mp3', args: ['C:/sex/religion/tin/design/grain/voice.mp3'] },
  { expected: 'polish.pdf', args: ['C:/week/polish.pdf'] },
  { expected: 'sister.jpg', args: ['C:/cry/brother/sister.jpg'] },
  { expected: 'cook.png', args: ['C:/poison/cook.png'] },
  { expected: 'breath.png', args: ['C:/competition/bite/breath.png'] },
  { expected: 'news.pdf', args: ['C:/produce/crush/substance/division/credit/guide/middle/news.pdf'] },
  { expected: 'damage.png', args: ['C:/burn/hearing/edge/disease/heat/damage.png'] },
  { expected: 'back.pdf', args: ['C:/comfort/back.pdf'] },
  { expected: 'fact.mp3', args: ['C:/punishment/copper/grip/help/glass/blood/fact.mp3'] },
  { expected: 'news.pdf', args: ['C:/produce/crush/substance/division/credit/guide/middle/news.pdf'] },
  { expected: 'breath.png', args: ['C:/competition/bite/breath.png'] },
  { expected: 'feeling.docx', args: ['C:/structure/earth/feeling.docx'] },
  { expected: 'news.pdf', args: ['C:/produce/crush/substance/division/credit/guide/middle/news.pdf'] },
  { expected: 'sister.jpg', args: ['C:/cry/brother/sister.jpg'] },
  { expected: 'question.exe', args: ['C:/blow/jump/verse/history/need/note/gold/question.exe'] },
  { expected: 'laugh.pdf', args: ['C:/mountain/story/laugh.pdf'] },
];

runTests(tests, solution);
