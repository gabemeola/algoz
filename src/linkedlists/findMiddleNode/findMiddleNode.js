const prettyJson = require('../../prettyJson')

// Time Complexity: O(log n) - Logarithmic Time
function findMiddleNode(nodeHead) {
  let fastPointer = nodeHead;
  let slowPointer = nodeHead;

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
}

module.exports = findMiddleNode;

