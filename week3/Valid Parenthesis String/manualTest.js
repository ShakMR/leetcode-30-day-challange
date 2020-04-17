const validParenthesisString = require('./validParenthesisString')


const input = '(*))';
const expected = true;
console.log(validParenthesisString(input), expected);
