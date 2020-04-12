/**
 * initialize your data structure here.
 */
class MinStack {
  stack = [];
  min = Number.MAX_SAFE_INTEGER;

  /**
   * @param {number} x
   * @return {void}
   */ 
  push(x) {
    if (this.min > x) {
      this.min = x
    }

    this.stack.push([x, this.min]);
  };

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    const length = this.stack.length
    if (length > 0) {
      this.min = this.stack[length - 1][1];
    } else {
      this.min = Number.MAX_SAFE_INTEGER;
    }
  };

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1][0];
  };

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  };

  toString() {
    this.stack.reverse().forEach((i) => { console.log(`[${i[0]},${i[1]}]`) });
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;
