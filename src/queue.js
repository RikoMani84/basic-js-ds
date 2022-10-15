const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {constructor() {
  this.list = null
}

getUnderlyingList() {
  return this.list
}

enqueue(value) {
  this.list = addNode (this.list, value)

  function addNode(node, value) {
    if (!node) {
      node = new ListNode(value)
      return node
    }

    node.next = addNode (node.next, value)
    return node
  }
}

dequeue() {
  if (!this.list) {
    return null
  }
  let headNode = this.list.value
  this.list = this.list.next
  return headNode
}

}

module.exports = {
  Queue
};
