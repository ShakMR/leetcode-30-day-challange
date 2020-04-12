let test = require('ava');
let compare = require('./backspaceStringCompare');

[
  // leetcode test cases
  ['ad#c', 'ab#c', true],
  ['ab##', 'c#d#', true],
  ['a##c', '#a#c', true],
  ['a#c', 'b', false],
  // own tests cases
  ['abb##', 'ad#', true],
  ['bxj##tw', 'bxj###tw', false],
].forEach(([S, T, expected]) => {
  test(`${S} ${expected ? 'should be equals to': 'should not be equals to'} ${T}`, t => {
    t.is(compare(S, T), expected);
  })
})
