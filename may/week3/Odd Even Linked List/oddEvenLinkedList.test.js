const test = require('ava');

const oddEvenLinkedList = require('./oddEvenLinkedList');

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


const ListNodeFromArray = (array) => {
  const head = new ListNode(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    const next = new ListNode(array[i]);
    current.next = next;
    current = next;
  }
  return head;
}

const arrayFromListNode = (head) => {
  let arr = [];
  let next = head;
  while (next) {
    arr.push(next.val);
    next = next.next;
  }
  return arr;
}

test('oddEvenLinkedList first test case', t => {
  const input = [1,2,3,4,5];
  const expected = [1,3,5,2,4];
  t.deepEqual(arrayFromListNode(oddEvenLinkedList(ListNodeFromArray(input))), expected);
});
