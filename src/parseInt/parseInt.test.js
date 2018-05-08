const coolerParseInt = require('./parseInt');

test('should return for negative', () => {
  expect(coolerParseInt('-2901')).toBe(-2901);
})

test('should return for positive', () => {
  expect(coolerParseInt('457692')).toBe(457692);
})

test('should ignore non numeric characters', () => {
  expect(coolerParseInt('5000Nah')).toBe(5000);
})

test('should return NaN for non numbers', () => {
  expect(coolerParseInt('lol')).toBe(NaN);
})
