/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function(head) {
  let current = head;
  let i = 1;
  let firstEven = null;
  let previousOdd = null;
  let previousEven = null;
  while (current) {
    const next = current.next;
    current.next = null;
    if (i % 2 === 0) {
      (previousEven || {}).next = current;
      if (!firstEven) {
        firstEven = current;
      }
      previousEven = current;
    } else {
      (previousOdd || {}).next = current;
      previousOdd = current
    }
    current = next;
    i++;
  }
  (previousOdd || {}).next = firstEven;
  return head;
};

module.exports = oddEvenList;
