const profile = require('../profile');
const isPalidrome = profile(require('./palindrome'));


test('should return correct output', () => {
  expect(isPalidrome('hannah')).toBe(true)
  expect(isPalidrome('gabe')).toBe(false)
})
