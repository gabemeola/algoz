const fizzBuzz = require('./fizzBuzz');

test('should output correctly', () => {
  const expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]
  expect(fizzBuzz(20)).toEqual(expected)
})
