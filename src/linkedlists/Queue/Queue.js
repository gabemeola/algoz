const Node = require('../Node')
const profile = require('../../profile')

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;

    this.enqueue = profile(this.enqueue.bind(this));
    this.dequeue = profile(this.dequeue.bind(this));
  }
  // Time Complexity: O(1) - constant time
  enqueue(value) {
    const node = new Node(value);

    // Assign the Head if first elem (special case)
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }
  // Time Complexity: O(1) - constant time
  dequeue() {
    const node = this.head;

    if (node === null) {
      console.log(new Error('No more items in the queue.'))
      return;
    }
    this.head = this.head.next;

    return node.value;
  }
}

const q = new Queue();
q.enqueue('gabe')
q.enqueue('maslow')
q.enqueue('dave')
console.log(q.head);
console.log();
q.dequeue()
q.dequeue()
q.enqueue('test boy')
q.dequeue()
console.log(q.head);
