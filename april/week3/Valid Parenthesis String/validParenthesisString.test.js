const test = require('ava');

const validParenthesisString = require('./validParenthesisString')

const a = [
  ['()', true],
  ['(*)', true],
  ['(*))', true],
  ['())', false],
  ['(', false],
  [')(',false]
];

a.forEach(([input, expected]) => {
  test(`validParenthesisString ${input} should ${expected || 'not'} pass`, t => {
    t.is(validParenthesisString(input), expected);
  })
})

