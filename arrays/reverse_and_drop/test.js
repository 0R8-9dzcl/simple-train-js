const runTests = require('../../testFunction');
const solution = require('./solution'); // Импортируем функцию из solution.js

const tests = [
  { expected: 'emos tset htiw htgnel', args: ['some test words with odd length'] },
  { expected: 'eb', args: ['learn clojure be happy'] },
  { expected: 'raey ezeens moor lavorppa drocer', args: ['year sneeze voice room death color approval record level owner'] },
  { expected: 'htaerb yrtsudni noisivid taes tsil esab', args: ['breath industry sea sense division seat list comfort grain base'] },
  { expected: 'daor wolb aedi eerged', args: ['top fruit use trick road crime blow idea plant degree'] },
  { expected: 'ypoc nrub elur', args: ['air copy burn education science hearing rule grain trade existence'] },
  { expected: 'gninrael raey rettub erac', args: ['harmony learning fiction year butter history voice care digestion plant'] },
  { expected: 'llup kcatta egnahcxe ecnahc raef', args: ['cloth error pull attack agreement exchange chance point fear blood'] },
  { expected: 'gninrael raey rettub erac', args: ['harmony learning fiction year butter history voice care digestion plant'] },
  { expected: 'htaerb yrtsudni noisivid taes tsil esab', args: ['breath industry sea sense division seat list comfort grain base'] },
  { expected: 'doow noitubirtsid edis ssenisub ytreporp', args: ['committee wood distribution slope amusement side light request business property'] },
  { expected: 'htaerb yrtsudni noisivid taes tsil esab', args: ['breath industry sea sense division seat list comfort grain base'] },
  { expected: 'yromem rehtom rethguad htworg', args: ['company taste memory mother sleep smile daughter history day growth'] },
  { expected: 'ecnatsid noitubirtsid noitcartta fles keew', args: ['art point smell distance night distribution attraction self law week'] },
  { expected: 'retsis gnihcaet ecneirepxe htaerb yrtsudni drawer', args: ['country sister fruit teaching experience breath industry reward knowledge feeling'] },
  { expected: 'noisiced tnemurtsni niar drow daor emit', args: ['decision chalk price instrument order rain word road paint time'] },
  { expected: 'ypoc nrub elur', args: ['air copy burn education science hearing rule grain trade existence'] },
  { expected: 'raey ezeens moor lavorppa drocer', args: ['year sneeze voice room death color approval record level owner'] },
  { expected: 'gnidliub ydob noitaler', args: ['building scale disgust curve fruit body limit owner relation event'] },
  { expected: 'tsim pirg thgiew', args: ['purpose sound comfort air mist education grip weight disgust opinion'] },
  { expected: 'liated nosiop llor ezeens miws tsim reppoc retsis tinu', args: ['detail poison roll sneeze swim mist copper sister music unit'] },
  { expected: 'llup kcatta egnahcxe ecnahc raef', args: ['cloth error pull attack agreement exchange chance point fear blood'] },
  { expected: 'doow noitubirtsid edis ssenisub ytreporp', args: ['committee wood distribution slope amusement side light request business property'] },
  { expected: 'nrub etunim ecir ssik kcatta emit rettel weiv', args: ['day burn minute rice kiss attack time quality letter view'] },
  { expected: 'retsis gnihcaet ecneirepxe htaerb yrtsudni drawer', args: ['country sister fruit teaching experience breath industry reward knowledge feeling'] },
  { expected: 'liated nosiop llor ezeens miws tsim reppoc retsis tinu', args: ['detail poison roll sneeze swim mist copper sister music unit'] },
  { expected: 'daor wolb aedi eerged', args: ['top fruit use trick road crime blow idea plant degree'] },
  { expected: 'raey ezeens moor lavorppa drocer', args: ['year sneeze voice room death color approval record level owner'] },
  { expected: 'htaerb yrtsudni noisivid taes tsil esab', args: ['breath industry sea sense division seat list comfort grain base'] },
  { expected: 'ecir etunim feileb', args: ['rice value metal offer example crime smash flame minute belief'] },
];

runTests(tests, solution);
