const test = require('ava');

const subArraySum = require('./subarraySumEqualsK');

test('subarraySumEqualsK first test case', t => {
  const array = [1,1,1];
  const k = 2;

  const expected = 2;

  t.is(subArraySum(array, k), expected);
});

test('subarraySumEqualsK second test case', t => {
  const array = [1,2,1,2,1,2,1,2,3];
  const k = 3;

  const expected = 8;

  t.is(subArraySum(array, k), expected);
});

test('subarraySumEqualsK third test case', t => {
  const array = [0,0,0,0,0,0,0,0,0,0]
  const k = 0;

  const expected = 55;

  t.is(subArraySum(array, k), expected);
});
