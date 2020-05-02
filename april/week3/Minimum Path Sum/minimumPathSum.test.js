const test = require('ava');

const minimumPath = require('./minimumPathSum');

test('minimumPathSum first test case', t => {
  const input = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ];
  const expected = 7;

  t.is(minimumPath(input), expected);
})

test('minimumPathSum second test case', t => {
  const input = [
    [1,2,3],
    [4,5,6]
  ];
  const expected = 12;

  t.is(minimumPath(input), expected);
})
