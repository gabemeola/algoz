function fibonacci(sequence, cache) {
  // Set up the cache hashmap first time executing
  // We are setting up a cache so we don't have to recalculate 
  // for every sequence. We can calculate on the first passthrough,
  // and subsequent passes don't need to recurse.
  if (typeof cache === 'undefined') cache = new Map()

  if (sequence < 1) return 0

  if (sequence <= 2) return 1

  if (cache.has(sequence)) {
    // console.log(cache)
    return cache.get(sequence)
  }

  const value = fibonacci(sequence - 1, cache) + fibonacci(sequence - 2, cache)

  cache.set(sequence, value);

  return value;
}

module.exports = fibonacci;
