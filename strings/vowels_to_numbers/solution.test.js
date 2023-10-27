const runTests = require('../../testService');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: ['wh23456t', '0b234567t', 'th2345t?'], args: [['whaaaaat', 'abooouuut', 'thaaaat?']] },
  { expected: ['s1l3ngw7rd', 'w1ws4l6ngw10rd', 'w1ws4m6chl10ngw14rd'], args: [['solongword', 'wowsolongword', 'wowsomuchlongword']] },
  { expected: ['cl2j4r6', 'p1th4n', '0l2x4r', 'j1v3scr7pt'], args: [['clojure', 'python', 'elixir', 'javascript']] },
  { expected: ['sc2l4', 'c1nn4ct78n', 'gr2wth', 'c1nn4ct78n', 'h12345lp'], args: [['scale', 'connection', 'growth', 'connection', 'heeeeelp']] },
  { expected: ['f1th4r', 'cr2d4t', 'dr2v4ng', 'f1th4r'], args: [['father', 'credit', 'driving', 'father']] },
  { expected: ['st2p', '0tt3mpt', 'd1st4nc7', 'cr2d4t', 'th23r5'], args: [['step', 'attempt', 'distance', 'credit', 'theory']] },
  { expected: ['c1rv4', '0tt3mpt', '0gr34m6nt', 'l1234q678910111213d'], args: [['curve', 'attempt', 'agreement', 'liiiiquuuuiiiid']] },
  { expected: ['c12gh', 'h12345lp', 'd1st4nc7', 'n1mb4r', 'h1m3r', 'dr2v4ng'], args: [['cough', 'heeeeelp', 'distance', 'number', 'humor', 'driving']] },
  { expected: ['th23r5', 'sw2m', 'c1rv4', 'c12gh', 's1st4r'], args: [['theory', 'swim', 'curve', 'cough', 'sister']] },
  { expected: ['st2p', 'p12m4nt', 'c1nn4ct78n', 'st23456rt', '0gr34m6nt'], args: [['step', 'payment', 'connection', 'staaaaart', 'agreement']] },
  { expected: ['h12345lp', 'sl2p', '0dv3rt6s8m10nt', 'sc2l4'], args: [['heeeeelp', 'slip', 'advertisement', 'scale']] },
  { expected: ['s1st4r', 'sw2m', 'n1mb4r', 's12', '012345nv8910111213nt161718192021222324252627n', 'sc2l4'], args: [['sister', 'swim', 'number', 'sea', 'iiiiiinveeeeeentiiiiiioooooon', 'scale']] },
  { expected: ['s1st4r', 'th23r5', 'gr2wth', 'c12gh'], args: [['sister', 'theory', 'growth', 'cough']] },
  { expected: ['st23456rt', 'sw2m', '0tt3mpt', 'sw2m'], args: [['staaaaart', 'swim', 'attempt', 'swim']] },
  { expected: ['0tt3mpt', 'h12345lp', '0dv3rt6s8m10nt', 'p12m4nt'], args: [['attempt', 'heeeeelp', 'advertisement', 'payment']] },
  { expected: ['sw2m', 'sh2345678d10111213141516', 'd1st4nc7', 'h12345lp'], args: [['swim', 'shaaaaaaadeeeeeee', 'distance', 'heeeeelp']] },
  { expected: ['sw2m', 'sh2345678d10111213141516', 's12', 'th23r5'], args: [['swim', 'shaaaaaaadeeeeeee', 'sea', 'theory']] },
  {
    expected: ['012345nv8910111213nt161718192021222324252627n', 'l1ft', '0gr34m6nt', 'cr2d4t', 'c1rv4', '0gr34m6nt'],
    args: [['iiiiiinveeeeeentiiiiiioooooon', 'lift', 'agreement', 'credit', 'curve', 'agreement']],
  },
  { expected: ['sw2m', 'sc2l4', 'sc234567l91011121314', 'c1nn4ct78n'], args: [['swim', 'scale', 'scaaaaaaleeeeee', 'connection']] },
  { expected: ['l1ft', 'c1rv4', 'h1m3r', 'st23456rt', 'st23456rt', 'sh2345678d10111213141516'], args: [['lift', 'curve', 'humor', 'staaaaart', 'staaaaart', 'shaaaaaaadeeeeeee']] },
  {
    expected: ['p12m4nt', '012345nv8910111213nt161718192021222324252627n', '0gr34m6nt', 'l1234q678910111213d', 'l1ft', 'n1mb4r'],
    args: [['payment', 'iiiiiinveeeeeentiiiiiioooooon', 'agreement', 'liiiiquuuuiiiid', 'lift', 'number']],
  },
  {
    expected: ['l1234q678910111213d', 'dr2v4ng', 'l1234q678910111213d', 'st23456rt', 'sc234567l91011121314', 'l1ft'],
    args: [['liiiiquuuuiiiid', 'driving', 'liiiiquuuuiiiid', 'staaaaart', 'scaaaaaaleeeeee', 'lift']],
  },
  { expected: ['pl23456789', 'c1rv4', 'h12345lp', 'sl2p'], args: [['plaaaayyyy', 'curve', 'heeeeelp', 'slip']] },
  { expected: ['h12345lp', 'l1234q678910111213d', 'n1mb4r', 'sh2345678d10111213141516'], args: [['heeeeelp', 'liiiiquuuuiiiid', 'number', 'shaaaaaaadeeeeeee']] },
  {
    expected: ['012345nv8910111213nt161718192021222324252627n', 's12', '0dv3rt6s8m10nt', '0dv3rt6s8m10nt', 'r12d4ng', 'th23r5'],
    args: [['iiiiiinveeeeeentiiiiiioooooon', 'sea', 'advertisement', 'advertisement', 'reading', 'theory']],
  },
  { expected: ['cr2d4t', 's1st4r', '0dv3rt6s8m10nt', 'h12345lp'], args: [['credit', 'sister', 'advertisement', 'heeeeelp']] },
  { expected: ['l1234q678910111213d', '0tt3mpt', 'gr2wth', 'st23456rt', '0gr34m6nt'], args: [['liiiiquuuuiiiid', 'attempt', 'growth', 'staaaaart', 'agreement']] },
  { expected: ['c12gh', 'gr2wth', 's12', '0gr34m6nt', '012345nv8910111213nt161718192021222324252627n'], args: [['cough', 'growth', 'sea', 'agreement', 'iiiiiinveeeeeentiiiiiioooooon']] },
  { expected: ['c1nn4ct78n', 's1st4r', '0tt3mpt', 'c1rv4', 'h1m3r'], args: [['connection', 'sister', 'attempt', 'curve', 'humor']] },
  { expected: ['l1ft', 'h12345lp', 'p12m4nt', 'l1234q678910111213d', 'h1m3r'], args: [['lift', 'heeeeelp', 'payment', 'liiiiquuuuiiiid', 'humor']] },
];

runTests(tests, solution);
