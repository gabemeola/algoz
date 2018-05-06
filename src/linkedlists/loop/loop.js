const createNodeList = require('../createNodeList');
const prettyJson = require('../../prettyJson');


/**
 * LOOP!
 */
const headNode = createNodeList(5);

let currNode = headNode;
while(currNode !== null) {
  console.log(prettyJson(currNode.value));
  currNode = currNode.next;
}
