let test = require('ava');
let MinStack = require('./minStack');

test('test case 1', t => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  t.is(minStack.getMin(), -3);
  minStack.pop();
  t.is(minStack.top(), 0);
  t.is(minStack.getMin(), -2);
});