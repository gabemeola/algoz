const profile = require('../../profile');
const findMiddleNode = require('./findMiddleNode')
const createNodeList = profile(require('../createNodeList'));

test('should return middleNode of 100', () => {
  const amount = 100;
  const node = findMiddleNode(createNodeList(amount));

  expect(node.value).toMatch(new RegExp(amount / 2))
})


test('should return floor middleNode of 23', () => {
  const amount = 23;
  const node = findMiddleNode(createNodeList(amount));

  expect(node.value).toMatch(new RegExp(Math.floor(amount / 2)))
})
