const test = require('ava');

const bitwiseANDRange = require('./bitwiseAndOfNumbersRange');

test('bitwiseAndOfNumbersRange first test case', t => {
  const m = 5;
  const n = 7;
  const expected = 4;

  t.is(bitwiseANDRange(m, n), expected);
});

test('bitwiseAndOfNumbersRange second test case', t => {
  const m = 0;
  const n = 1;
  const expected = 0;

  t.is(bitwiseANDRange(m, n), expected);
});

test('bitwiseAndOfNumbersRange third test case', t => {
  const m = 2;
  const n = 3;
  const expected = 2;

  t.is(bitwiseANDRange(m, n), expected);
});

test('bitwiseAndOfNumbersRange forth test case', t => {
  const m = 0;
  const n = 2147483647;
  const expected = 0;

  t.is(bitwiseANDRange(m, n), expected);
});
