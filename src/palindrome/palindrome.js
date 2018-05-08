function palidrome(str) {
  return str === str.split('').reverse().join('');
}


module.exports = palidrome;
