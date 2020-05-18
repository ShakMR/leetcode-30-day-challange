const test = require('ava');

const permutationInString = require('./permutationInString');

test('permutationInString first test case', t => {
  const s1 = 'ab';
  const s2 = 'eidbaooo';

  t.true(permutationInString(s1, s2));
});
