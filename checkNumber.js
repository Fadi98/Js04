function checkNumber(n) {
  n <= 10;
  if (n < 5) {
    console.log("Faible");
  } else if (n === 5 || n === 6) {
    console.log("Moyen");
  }
}
checkNumber(1);
checkNumber(5);
checkNumber(6);

module.exports = checkNumber;