const test = require('ava');

const numberComplement = require('./numberComplement');

test('numberComplement first test case', t => {
  const input = 5;
  const expected = 2;
  t.is(numberComplement(input), expected);
});
