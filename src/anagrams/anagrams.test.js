const profile = require('../profile');
const areAnagrams = profile(require('./anagrams'));


test('should return correct output', () => {
  expect(areAnagrams('heart', 'earth')).toBe(true)
  expect(areAnagrams('silent', 'listen')).toBe(true)
  expect(areAnagrams('foo', 'bar')).toBe(false)
})
