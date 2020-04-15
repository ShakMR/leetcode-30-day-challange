const stringShifts = require('./stringShifts');

const shifts = [[0,1],[1,2]];
const s = "abc";

console.log(stringShifts(s, shifts));

const shifts2 = [[0,2],[1,1]];
const s2 = "abc";

console.log(stringShifts(s2, shifts2));
