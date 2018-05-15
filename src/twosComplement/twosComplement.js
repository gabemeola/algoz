function twoComplement(nums, target) {
  // Using a hashmap to track what
  // we have already seen
  let seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    // The complement of the current num
    const complement = target - num;

    // Check if we have seen the complement
    if (seen.has(complement)) {
      const complementIndex = seen.get(complement)

      // If the complement index if not ourself, then we have a match!
      if (complementIndex !== i) {
        return [complementIndex, i]
      }
    }

    // Add an Entry to our hashmap
    // Doing this operation last avoid issues with the same value in multiple indices.
    seen.set(num, i)
  }

  // Clear Map for Garbage Collection
  seen.clear();
  return null;
};

module.exports = twoComplement;
