const faker = require('faker');
const Node = require('./Node');
const prettyJson = require('../prettyJson');

/**
 * Creates a Node List with random data.
 * Return Head
 * 
 * @param {number} amountOfNodes 
 */
function createNodeList(amountOfNodes = 0) {
  // Reset Faker Seed
  faker.seed(101);

  let lastNode = null;
  for (let i = 0; i < amountOfNodes; i++) {
    const node = new Node(
      `${faker.name.firstName()} @ ${i}`,
      lastNode
    );
    lastNode = node;
  }

  console.log(`Created ${amountOfNodes.toLocaleString()} nodes.`)
  return lastNode;
}

module.exports = createNodeList
