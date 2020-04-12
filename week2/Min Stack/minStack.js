class StackItem {
  value;
  min;

  constructor(value, min) {
    this.value = value;
    this.min = min;
  }

}

/**
 * initialize your data structure here.
 */
class MinStack {
  stack = [];

  /**
   * @param {number} x
   * @return {void}
   */ 
  push(x) {
    let min = Number.MAX_SAFE_INTEGER;
    if (this.stack.length !== 0) {
      min = this.getMin();
    }

    if (min > x) {
      min = x
    }

    this.stack.push(new StackItem(x, min));
  };

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  };

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1].value;
  };

  /**
   * @return {number}
   */
  getMin() {
    return this.stack[this.stack.length - 1].min;
  };
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
