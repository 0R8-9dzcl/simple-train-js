const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: { bacon: 1, egg: 1, spam: 4 }, args: [['Spam', 'egg', 'Spam', 'Spam', 'bacon', 'Spam']] },
  { expected: { cat: 1, dog: 1, fish: 2 }, args: [['cat', 'dog', 'fish', 'fish']] },
  { expected: { canvas: 1, cough: 1, process: 1, side: 2 }, args: [['process', 'canvas', 'cough', 'side', 'side']] },
  { expected: { growth: 1, mark: 1, operation: 1, side: 1 }, args: [['operation', 'side', 'mark', 'growth']] },
  { expected: { cough: 1, mark: 1, process: 2, time: 1 }, args: [['time', 'cough', 'process', 'mark', 'process']] },
  { expected: { growth: 1, operation: 1, process: 1, side: 1, tax: 1, time: 1 }, args: [['tax', 'time', 'growth', 'operation', 'process', 'side']] },
  { expected: { brass: 1, cough: 1, process: 1, time: 2 }, args: [['brass', 'time', 'process', 'cough', 'time']] },
  { expected: { canvas: 1, mark: 1, paper: 1, process: 1, side: 1, talk: 1 }, args: [['side', 'canvas', 'talk', 'process', 'paper', 'mark']] },
  { expected: { humor: 1, operation: 1, paper: 1, talk: 1 }, args: [['humor', 'talk', 'paper', 'operation']] },
  { expected: { growth: 1, paper: 1, side: 1, time: 1 }, args: [['paper', 'side', 'growth', 'time']] },
  { expected: { cough: 1, operation: 2, paper: 1, talk: 1 }, args: [['paper', 'cough', 'operation', 'talk', 'operation']] },
  { expected: { approval: 1, mark: 1, process: 2, side: 1, time: 1 }, args: [['process', 'mark', 'side', 'time', 'process', 'approval']] },
  { expected: { brass: 1, growth: 2, process: 1, time: 1 }, args: [['growth', 'brass', 'process', 'time', 'growth']] },
  { expected: { paper: 2, side: 1, talk: 1, tax: 1 }, args: [['talk', 'paper', 'paper', 'side', 'tax']] },
  { expected: { canvas: 2, growth: 2, talk: 1, time: 1 }, args: [['canvas', 'talk', 'canvas', 'time', 'growth', 'growth']] },
  { expected: { approval: 2, cough: 1, mark: 1, time: 1 }, args: [['time', 'cough', 'mark', 'approval', 'approval']] },
  { expected: { canvas: 1, humor: 1, side: 1, tax: 1 }, args: [['humor', 'tax', 'canvas', 'side']] },
  { expected: { approval: 1, growth: 2, process: 2, talk: 1 }, args: [['process', 'growth', 'growth', 'approval', 'process', 'talk']] },
  { expected: { brass: 1, growth: 1, humor: 1, process: 1, talk: 1, time: 1 }, args: [['process', 'humor', 'time', 'brass', 'growth', 'talk']] },
  { expected: { humor: 1, paper: 1, process: 1, structure: 1 }, args: [['humor', 'process', 'structure', 'paper']] },
  { expected: { mark: 1, paper: 3, structure: 1, time: 1 }, args: [['mark', 'structure', 'paper', 'time', 'paper', 'paper']] },
  { expected: { growth: 1, humor: 1, mark: 1, structure: 1 }, args: [['structure', 'mark', 'growth', 'humor']] },
  { expected: { growth: 1, process: 1, side: 2, structure: 1 }, args: [['growth', 'side', 'structure', 'side', 'process']] },
  { expected: { approval: 1, paper: 1, side: 1, structure: 2, tax: 1 }, args: [['structure', 'side', 'paper', 'approval', 'tax', 'structure']] },
  { expected: { cough: 1, humor: 1, mark: 1, structure: 1 }, args: [['cough', 'mark', 'humor', 'structure']] },
  { expected: { brass: 1, cough: 1, humor: 1, paper: 1, talk: 1 }, args: [['paper', 'talk', 'cough', 'humor', 'brass']] },
  { expected: { canvas: 1, growth: 1, side: 2 }, args: [['growth', 'side', 'side', 'canvas']] },
  { expected: { process: 2, talk: 1, tax: 1 }, args: [['process', 'talk', 'tax', 'process']] },
  { expected: { approval: 1, mark: 1, operation: 1, structure: 1 }, args: [['structure', 'mark', 'operation', 'approval']] },
  { expected: { growth: 2, humor: 2, time: 1 }, args: [['time', 'humor', 'humor', 'growth', 'growth']] },
];

runTests(tests, solution);
