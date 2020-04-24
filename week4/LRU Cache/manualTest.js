const LRUCache = require('./LRUCache');

const cache = new LRUCache( 2);

cache.put(1, 1);
cache.put(2, 2);
let r = cache.get(1);       // returns 1
console.log(r, 1)
cache.put(3, 3);    // evicts key 2
r = cache.get(2);       // returns -1 (not found)
console.log(r, -1);
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
console.log(r, -1);
r = cache.get(3);       // returns 3
console.log(r, 3)
r = cache.get(4);
console.log(r, 4)