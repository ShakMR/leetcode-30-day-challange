class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.counter = 0;
    this.maxCap = capacity;
    this.newestKey = null;
    this.oldestKey = null;
    this.cacheMap = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.cacheMap.has(key)) {
      const match = this.cacheMap.get(key);
      const { next, previous } = { ...match };

      if (next) {
        this.cacheMap.get(next).previous = previous;
      } else if (previous) {
        this.oldestKey = previous;
      }
      if (previous) {
        this.cacheMap.get(previous).next = next;
      }
      match.previous = next;

      if (this.newestKey !== key) {
        match.next = this.newestKey;
        this.cacheMap.get(this.newestKey).previous = key
        this.newestKey = key;
      }
      console.log('GET', key, 'cache status', this.oldestKey, this.newestKey, this.cacheMap);
      return match.value;
    }
    console.log('GET', key, 'cache status', this.oldestKey, this.newestKey, this.cacheMap);
    return -1;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (!this.oldestKey) {
      this.oldestKey = key;
    }

    if (this.counter === this.maxCap) {
      const evicted = this.oldestKey;

      if (evicted) {
        console.log('evicted', evicted);
        const documentToBeEvicted = this.cacheMap.get(evicted);
        if (documentToBeEvicted.previous) {
          const previousEntry = this.cacheMap.get(documentToBeEvicted.previous);
          previousEntry.next = null;
        }
        this.oldestKey = documentToBeEvicted.previous;
        this.cacheMap.delete(evicted);
      }
    } else {
      this.counter++;
    }

    if (this.newestKey) {
      this.cacheMap.get(this.newestKey).previous = key;
    }
    this.cacheMap.set(
      key,
      {
        value,
        previous: null,
        next: this.newestKey,
      },
    );
    this.newestKey = key;
    console.log('PUT', key, value, 'cache status', this.oldestKey, this.newestKey, this.cacheMap);
  }
}

module.exports = LRUCache;
