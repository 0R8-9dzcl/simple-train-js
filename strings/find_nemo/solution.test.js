const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 'I found Nemo at 1!', args: ['Nemo is me'] },
  { expected: 'I found Nemo at 1!', args: ['Nemo James Nemo'] },
  { expected: 'I found Nemo at 2!', args: ['Hi Nemo'] },
  { expected: "I can't find Nemo :(", args: ['Hello world'] },
  { expected: "I can't find Nemo :(", args: ['silver distance breath answer start step insurance'] },
  { expected: "I can't find Nemo :(", args: ['tax waste attraction step thing interest disgust'] },
  { expected: 'I found Nemo at 7!', args: ['coal power birth insurance record cloth Nemo machine'] },
  { expected: 'I found Nemo at 2!', args: ['harbor Nemo argument expansion death harmony wave month'] },
  { expected: 'I found Nemo at 2!', args: ['organisation Nemo direction record organisation gold copy cook'] },
  { expected: 'I found Nemo at 5!', args: ['note bread range chance Nemo side edge front'] },
  { expected: "I can't find Nemo :(", args: ['sea rest produce step blood addition note'] },
  { expected: "I can't find Nemo :(", args: ['pain reaction bite reaction list back middle'] },
  { expected: "I can't find Nemo :(", args: ['burst idea self art reaction side trick'] },
  { expected: 'I found Nemo at 1!', args: ['Nemo wax burn substance verse cover statement protest'] },
  { expected: "I can't find Nemo :(", args: ['pain reaction bite reaction list back middle'] },
  { expected: "I can't find Nemo :(", args: ['stretch lift ice disease process government structure'] },
  { expected: "I can't find Nemo :(", args: ['tax waste attraction step thing interest disgust'] },
  { expected: "I can't find Nemo :(", args: ['learning shame flight wind damage wool name'] },
  { expected: "I can't find Nemo :(", args: ['amount science lead jelly digestion current agreement'] },
  { expected: "I can't find Nemo :(", args: ['talk food measure wool stitch distribution scale'] },
  { expected: "I can't find Nemo :(", args: ['tax waste attraction step thing interest disgust'] },
  { expected: 'I found Nemo at 8!', args: ['mass top need lead stretch news teaching Nemo'] },
  { expected: "I can't find Nemo :(", args: ['amount science lead jelly digestion current agreement'] },
  { expected: 'I found Nemo at 1!', args: ['Nemo wax burn substance verse cover statement protest'] },
  { expected: 'I found Nemo at 2!', args: ['turn Nemo paint operation opinion organisation verse love'] },
  { expected: 'I found Nemo at 8!', args: ['regret rate observation stone instrument religion brass Nemo'] },
  { expected: "I can't find Nemo :(", args: ['learning shame flight wind damage wool name'] },
  { expected: 'I found Nemo at 8!', args: ['danger blood smash language back cotton offer Nemo'] },
  { expected: 'I found Nemo at 8!', args: ['breath minute decision sense fold copper daughter Nemo'] },
  { expected: "I can't find Nemo :(", args: ['talk food measure wool stitch distribution scale'] },
];

runTests(tests, solution);
