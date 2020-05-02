function ListNode(val) {
     this.val = val;
     this.next = null;
}

ListNode.fromArray = (array) => {
  const firstNode = new ListNode(array[0]);
  let currentNode = firstNode;
  for (let i = 1; i < array.length; i++) {
    currentNode.next = new ListNode(array[i]);
    currentNode = currentNode.next;
  }
  return firstNode;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  const array = toArray(head);
  const middle = Math.ceil((array.length-1)/2.0)
  return array[middle];
};

function toArray(head) {
  const array = [head];
  let currentNode = head.next;
  while (currentNode != null) {
    array.push(currentNode);
    currentNode = currentNode.next;
  }
  return array;
}

const input = [1,2,3,4,5];
const listNode = ListNode.fromArray(input)
console.log(middleNode(listNode));