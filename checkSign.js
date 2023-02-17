function checkSign(n) {
  if (n < 0) {
    return "Negatif";
  } else {
    return "Positif";
  }
}
console.log(checkSign(-2));
console.log(checkSign(8));
console.log(checkSign(0));


module.exports = checkSign;