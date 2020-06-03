const test = require('ava');

const medianOfTwoSortedArrays = require('./medianOfTwoSortedArrays');

test('medianOfTwoSortedArrays first test case', t => {
  const n1 = [1,3];
  const n2 = [2];
  const expected = 2.0;
  t.is(medianOfTwoSortedArrays(n1, n2), expected);
});

test('medianOfTwoSortedArrays second test case', t => {
  const n1 = [1, 2];
  const n2 = [3, 4];
  const expected = 2.5;
  t.is(medianOfTwoSortedArrays(n1, n2), expected);
});

test('medianOfTwoSortedArrays third test case', t => {
  const n1 = [0, 0];
  const n2 = [0, 0];
  const expected = 0;
  t.is(medianOfTwoSortedArrays(n1, n2), expected);
});
