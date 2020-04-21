const test = require('ava');

const BinaryMatrix = require('./BinaryMatrix');

const leftMostColumn = require('./leftmostColumnWithAtLeastAOne');

test('leftmostColumnWithAtLeastAOne first test case', t => {
  const matrix = [[0,0],[1,1]];

  const expected = 0;
  t.is(leftMostColumn(new BinaryMatrix(matrix)), expected);
});

test('leftmostColumnWithAtLeastAOne second test case', t => {
  const matrix = [[0,0],[0,1]];

  const expected = 1;
  t.is(leftMostColumn(new BinaryMatrix(matrix)), expected);
});

test('leftmostColumnWithAtLeastAOne third test case', t => {
  const matrix = [[0,0],[0,0]];

  const expected = -1;
  t.is(leftMostColumn(new BinaryMatrix(matrix)), expected);
});

test('leftmostColumnWithAtLeastAOne forth test case', t => {
  const matrix = [[0,0,0,1],[0,0,1,1],[0,1,1,1]];

  const expected = 1;
  t.is(leftMostColumn(new BinaryMatrix(matrix)), expected);
});
