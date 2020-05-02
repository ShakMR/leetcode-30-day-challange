const test = require('ava');

const firstBadVersion = require('./firstBadVersion');

test('firstBadVersion first test case', t => {
  const input = 0;
  const expected = 0;
  t.is(firstBadVersion(input), expected);
});