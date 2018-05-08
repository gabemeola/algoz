// Time Complexity: O(n) - linear time
function fizzBuzz(end = 100) {
  for (let i = 1; i <= end; i++) {
    let str = '';
    if (i % 3 === 0) {
      str += 'Fizz'
    }

    if (i % 5 === 0) {
      str += 'Buzz'
    }

    console.log(str || i)
  }
}

fizzBuzz()
