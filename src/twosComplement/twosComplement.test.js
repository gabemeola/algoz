const twoComp = require('./twosComplement');

it('should output the correct result', () => {
  expect(twoComp([2, 7, 11, 15], 9)).toEqual([0, 1])
})
