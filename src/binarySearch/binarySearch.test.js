const profile = require('../profile');
const binarySearch = profile(require('./binarySearch'), false)

it('should return the correct result', () => {
  const array = [];
  for(let i = 1; i <= 200000; i += 3) {
	  array.push(i);
  }
  expect(binarySearch(array, 649)).toBe(216)
})
