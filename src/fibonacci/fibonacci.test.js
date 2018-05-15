const profile = require('../profile');
const fibonacci = profile(require('./fibonacci'))

it('should return the correct output', () => {
  expect(fibonacci(32)).toBe(2178309)
})

it('should return the correct output', () => {
  expect(fibonacci(2)).toBe(1)
})
