const profile = require('../../profile');
const createNodeList = profile(require('../createNodeList'));
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

const measureFindMiddleNode = profile(findMiddleNode);


const nodeList = createNodeList(20000)
console.log(measureFindMiddleNode(nodeList))

