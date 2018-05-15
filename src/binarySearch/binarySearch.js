// Time Complexity: O(log n)
function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let currIndex;

  // Only loop while min is not greater than the max
  while(min <= max) {
    // Added both min and max together, then divide
    // by two to get the middle value min and max.
    currIndex = Math.floor(((max + min) / 2))
    console.log({ currIndex, min, max, plus: max + min })
    let selectedValue = arr[currIndex]

    // We have a match, so we early return
    if (selectedValue === target) {
      return currIndex
    }

    // If target is less than the selectedValue,
    // our next min is the currentIndex plus 1.
    if (selectedValue < target) {
      min = currIndex + 1
    }
    // If target is greater than the selected value
    else if (selectedValue > target) {
      max = currIndex - 1
    }
  }

  return null
}


module.exports = binarySearch
