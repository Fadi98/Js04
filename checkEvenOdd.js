function checkEvenOdd(a, b) {
  if (a % 2 != 0) {
    return "Impair"
  }
  else {
    return "Pair"
  }
};
console.log(checkEvenOdd(3));

console.log(checkEvenOdd(6));

module.exports = checkEvenOdd;