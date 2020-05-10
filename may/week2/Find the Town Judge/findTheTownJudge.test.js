const test = require('ava');

const findTheTownJudge = require('./findTheTownJudge');

test('findTheTownJudge first test case', t => {
  const N = 2;
  const trust = [[1,2]]
  const expected = 2;
  t.is(findTheTownJudge(N, trust), expected);
});
