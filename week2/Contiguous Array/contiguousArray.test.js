const test = require('ava');

const contiguousArray = require('./contiguousArray');

[
  [[0,1], 2],
  [[0,1,0], 2],
  [[0,0,1,0,1,0,0,1,1], 8]
].forEach(([array, expected]) => {
  test(`[${array.join(',')}] should return ${expected}`, t => {
    t.is(contiguousArray(array), expected);
  });
})
