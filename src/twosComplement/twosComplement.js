function twoComplement(nums, target) {
  // Using a hashmap to track what
  // we have already seen
  let seen = new Map();
  
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      // Add an Entry to our hashmap
      seen.set(num, i)
    
      // The complement of the current num
      const complement = target - num;
    
      // If we have seen the complement, we have a match!
      if (seen.has(complement)) {
        return [seen.get(complement), i]
      }
  }

  // Clear Map for Garbage Collection
  seen.clear();
  return null;
};

module.exports = twoComplement;
