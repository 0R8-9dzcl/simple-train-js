const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: { Spam: 4, bacon: 1, egg: 1 }, args: [['Spam', 'egg', 'Spam', 'Spam', 'bacon', 'Spam']] },
  { expected: { cat: 1, dog: 1, fish: 2 }, args: [['cat', 'dog', 'fish', 'fish']] },
  { expected: { process: 1, canvas: 1, cough: 1, side: 2 }, args: [['process', 'canvas', 'cough', 'side', 'side']] },
  { expected: { mark: 1, operation: 1, side: 1, growth: 1 }, args: [['operation', 'side', 'mark', 'growth']] },
  { expected: { process: 2, time: 1, mark: 1, cough: 1 }, args: [['time', 'cough', 'process', 'mark', 'process']] },
  { expected: { process: 1, time: 1, operation: 1, side: 1, growth: 1, tax: 1 }, args: [['tax', 'time', 'growth', 'operation', 'process', 'side']] },
  { expected: { process: 1, time: 2, cough: 1, brass: 1 }, args: [['brass', 'time', 'process', 'cough', 'time']] },
  { expected: { process: 1, mark: 1, paper: 1, canvas: 1, side: 1, talk: 1 }, args: [['side', 'canvas', 'talk', 'process', 'paper', 'mark']] },
  { expected: { operation: 1, paper: 1, talk: 1, humor: 1 }, args: [['humor', 'talk', 'paper', 'operation']] },
  { expected: { time: 1, paper: 1, side: 1, growth: 1 }, args: [['paper', 'side', 'growth', 'time']] },
  { expected: { operation: 2, paper: 1, cough: 1, talk: 1 }, args: [['paper', 'cough', 'operation', 'talk', 'operation']] },
  { expected: { process: 2, time: 1, mark: 1, side: 1, approval: 1 }, args: [['process', 'mark', 'side', 'time', 'process', 'approval']] },
  { expected: { process: 1, time: 1, growth: 2, brass: 1 }, args: [['growth', 'brass', 'process', 'time', 'growth']] },
  { expected: { paper: 2, side: 1, tax: 1, talk: 1 }, args: [['talk', 'paper', 'paper', 'side', 'tax']] },
  { expected: { time: 1, canvas: 2, growth: 2, talk: 1 }, args: [['canvas', 'talk', 'canvas', 'time', 'growth', 'growth']] },
  { expected: { time: 1, mark: 1, cough: 1, approval: 2 }, args: [['time', 'cough', 'mark', 'approval', 'approval']] },
  { expected: { canvas: 1, side: 1, tax: 1, humor: 1 }, args: [['humor', 'tax', 'canvas', 'side']] },
  { expected: { process: 2, growth: 2, talk: 1, approval: 1 }, args: [['process', 'growth', 'growth', 'approval', 'process', 'talk']] },
  { expected: { process: 1, time: 1, growth: 1, brass: 1, talk: 1, humor: 1 }, args: [['process', 'humor', 'time', 'brass', 'growth', 'talk']] },
  { expected: { process: 1, paper: 1, humor: 1, structure: 1 }, args: [['humor', 'process', 'structure', 'paper']] },
  { expected: { time: 1, mark: 1, paper: 3, structure: 1 }, args: [['mark', 'structure', 'paper', 'time', 'paper', 'paper']] },
  { expected: { mark: 1, growth: 1, humor: 1, structure: 1 }, args: [['structure', 'mark', 'growth', 'humor']] },
  { expected: { process: 1, side: 2, growth: 1, structure: 1 }, args: [['growth', 'side', 'structure', 'side', 'process']] },
  { expected: { paper: 1, side: 1, tax: 1, approval: 1, structure: 2 }, args: [['structure', 'side', 'paper', 'approval', 'tax', 'structure']] },
  { expected: { mark: 1, cough: 1, humor: 1, structure: 1 }, args: [['cough', 'mark', 'humor', 'structure']] },
  { expected: { paper: 1, cough: 1, brass: 1, talk: 1, humor: 1 }, args: [['paper', 'talk', 'cough', 'humor', 'brass']] },
  { expected: { canvas: 1, side: 2, growth: 1 }, args: [['growth', 'side', 'side', 'canvas']] },
  { expected: { process: 2, tax: 1, talk: 1 }, args: [['process', 'talk', 'tax', 'process']] },
  { expected: { mark: 1, operation: 1, approval: 1, structure: 1 }, args: [['structure', 'mark', 'operation', 'approval']] },
  { expected: { time: 1, growth: 2, humor: 2 }, args: [['time', 'humor', 'humor', 'growth', 'growth']] },
];

runTests(tests, solution);
