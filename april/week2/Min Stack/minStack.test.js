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

test('private test case 2', t => {
  const fns = ["push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"];
  const values = [[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]];
  const expected = [null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483647,null,-2147483648,-2147483648,null,2147483647];
  const stack = new MinStack();
  fns.forEach((fn, index) => {
    const mine = stack[fn](values[index][0]);
    console.log(fn, values[index], expected[index], mine);
    t.is(mine, expected[index]);

    // console.log('#####')
    // stack.toString();
    // console.log('#####')
  })
});