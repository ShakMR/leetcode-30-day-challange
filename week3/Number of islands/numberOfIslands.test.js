const test = require('ava');

const numberOfIslands = require('./numberOfIslands');

test('numberOfIslands first test case', t => {
  const input = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];
  const expected = 1;
  t.is(numberOfIslands(input), expected);
})

test('numberOfIslands second test case', t => {
  const input = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ];
  const expected = 3;
  t.is(numberOfIslands(input), expected);
})
test('numberOfIslands third test case', t => {
  const input = [
    ['1','1','1'],
    ['0','1','0'],
    ['1','1','1']
  ];
  const expected = 3;
  t.is(numberOfIslands(input), expected);
})
