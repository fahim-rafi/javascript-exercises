var removeFromArray = function (array, ...args) {
  let newArray = array.filter((values) => !args.includes(values));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
