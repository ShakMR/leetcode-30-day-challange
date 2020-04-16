const test = require('ava');

const maxSubarray = require('./maxSubarray');

[
  [[-2,1,-3,4,-1,2,1,-5,4], 6],
  [[-1], -1]
].forEach(([input, expected]) => {
  test(`[${input.join(',')}] should return ${expected}`, t => {
    t.is(maxSubarray(input), expected);
  });
});
