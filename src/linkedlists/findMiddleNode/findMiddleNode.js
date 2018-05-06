const createNodeList = require('../createNodeList');
const prettyJson = require('../../prettyJson')
const profile = require('../../profile');


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


const nodeList = createNodeList(2000000)
console.log(measureFindMiddleNode(nodeList))
