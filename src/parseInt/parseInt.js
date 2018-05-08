function coolerParseInt(str) {
  const zeroPoint = '0'.charCodeAt(0);
  
  let sign = 1;
  if (str[0] === '-') {
    sign = -1;
    // Use rest of of string
    str = str.substring(1)
  }
  

  let acc = null;
  for (let char of str) {
    const varChar = char.charCodeAt(0) - zeroPoint;
    // Anything past the number 9 we don't consider a number
    if (varChar <= 9) {
      if (acc === null) acc = 0
      acc = acc * 10 + varChar
    }
  }

  if (acc === null) return NaN;
  return acc * sign;
}


module.exports = coolerParseInt;
