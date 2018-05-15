function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let currIndex;

  while(min <= max) {
    currIndex = Math.floor(((max + min) / 2))
    let selectedValue = arr[currIndex]
    // console.log({ currIndex, selectedValue, min, max })

    if (selectedValue === target) {
      return currIndex
    }

    if (selectedValue < target) {
      min = currIndex + 1
    }
    else if (selectedValue > target) {
      max = currIndex - 1
    }
  }

  return null
}


module.exports = binarySearch
