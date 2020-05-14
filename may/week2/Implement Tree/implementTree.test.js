const test = require('ava');

const Trie = require('./implementTree');

test('implementTree first test case', t => {
  const trie = new Trie();

  trie.insert("apple");
  t.true(trie.search("apple"));
  t.false(trie.search("app"));
  t.true(trie.startsWith("app"));
  trie.insert("app");
  t.true(trie.search("app"));
});
