const test = require('ava');

const stringShifts = require('./stringShifts');

test('should shift \'abc\' to \'cab\'', t => {
  const shifts = [[0,1],[1,2]];
  const s = "abc";

  t.is(stringShifts(s, shifts), 'cab');
})

