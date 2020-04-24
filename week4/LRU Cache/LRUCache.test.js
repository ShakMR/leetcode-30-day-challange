const test = require('ava');

const LRUCache = require('./LRUCache');

test('LRUCache first test case', t => {
  const cache = new LRUCache( 2);

  cache.put(1, 1);
  cache.put(2, 2);
  let r = cache.get(1);       // returns 1
  t.is(r, 1)
  cache.put(3, 3);    // evicts key 2
  r = cache.get(2);       // returns -1 (not found)
  t.is(r, -1);
  cache.put(4, 4);    // evicts key 1
  cache.get(1);       // returns -1 (not found)
  t.is(r, -1);
  r = cache.get(3);       // returns 3
  t.is(r, 3)
  r = cache.get(4);
  t.is(r, 4)
});

test('LRUCache second test case', t => {
  const fns = ["put","get","put","get","get"];
  const values = [[2,1],[2],[3,2],[2],[3]];
  const stack = new LRUCache(1);
  fns.forEach((fn, index) => {
    const mine = stack[fn](...values[index]);
    // console.log(fn, values[index], mine);
  })
});