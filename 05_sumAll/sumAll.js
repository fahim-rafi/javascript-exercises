const sumAll = function (a, b) {
  //   var sum = 0;
  //   for (let num = a; num <= b; num++) {
  //     // Runs 5 times, with values of step 0 through 4.
  //     sum = sum + num;
  //   }
  //   return sum;
  if (Math.sign(a) == -1 || Math.sign(b) == -1) return "ERROR";
  if (isNaN(a) || isNaN(b)) return "ERROR";
  let n = Math.abs(a - b) + 1;
  let sum = (n / 2) * (a + b);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
