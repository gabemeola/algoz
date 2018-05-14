const twoComp = require('./twosComplement');

it('should output the correct result', () => {
  expect(twoComp([2, 7, 11, 15], 9)).toEqual([0, 1])
})

it('should output the correct result', () => {
  expect(twoComp([3,2,4], 6)).toEqual([1,2])
})
