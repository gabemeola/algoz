// Time Complexity: O(n) - linear time
function areAnagrams(firstWord, secondWord) {
  // New HashMap "Histogram"
  const hist = new Map();

  for (let char of firstWord) {
    // Set value to 0 for first time seeing it.
    // Increase by one for subsequent times.
    hist.set(char, (hist.get(char) || 0) + 1)
  }

  for (let char of secondWord) {
    if (!hist.has(char)) return false
    hist.set(char, hist.get(char) - 1);
  }

  // Loop through map and check if value is balanced "0"
  return Array.from(hist).every(([ _key, value]) => {
    return value === 0
  })
}


module.exports = areAnagrams;
