class TrieNode {
  constructor(value, isWord=false) {
    this.value = value;
    this.children = new Array(26).fill(null);
    this.isWord = isWord;
  }

  has(char) {
    const index = char.charCodeAt(0)-97;
    return !!this.children[index];
  }

  getChild(char) {
    const index = char.charCodeAt(0)-97;
    return this.children[index];
  }

  addChildren(node) {
    const value = node.value;
    const index = value.charCodeAt(0)-97;
    if (!this.children[index]) {
      this.children[index] = node;
    }
  }

  mark() {
    this.isWord = true;
  }

  isMarked() {
    return this.isWord;
  }
}

/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let currentLevel = this.root;
    for (let c of word) {
      if (currentLevel.has(c)) {
        currentLevel = currentLevel.getChild(c);
      } else {
        const node = new TrieNode(c);
        currentLevel.addChildren(node);
        currentLevel = node;
      }
    }
    currentLevel.mark();
  }


  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let currentLevel = this.root;
    for (let c of word) {
      if (currentLevel.has(c)) {
        currentLevel = currentLevel.getChild(c);
      } else {
        return false;
      }
    }
    return currentLevel.isMarked();
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let currentLevel = this.root;
    for (let c of prefix) {
      if (currentLevel.has(c)) {
        currentLevel = currentLevel.getChild(c);
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = Trie;
