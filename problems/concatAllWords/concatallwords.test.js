const concat = require('./concatallwords');

const s = "barfoofoobarthefoobarman";
const words = ["foo","bar", "the"]
const expected = [0,9];
console.log(concat(s, words));
