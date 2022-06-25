const ftoc = function (x) {
  return Math.round((((x - 32.0) * 5.0) / 9.0) * 10) / 10;
};

const ctof = function (x) {
  return Math.round(((x * 9.0) / 5.0 + 32.0) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
