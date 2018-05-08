// Time Complexity: O(n) - linear time
function fizzBuzz(end = 100) {
  let arr = []
  for (let i = 1; i <= end; i++) {
    let str = '';
    if (i % 3 === 0) {
      str += 'Fizz'
    }

    if (i % 5 === 0) {
      str += 'Buzz'
    }

    arr.push(str || i)
  }

  return arr
}

module.exports = fizzBuzz
