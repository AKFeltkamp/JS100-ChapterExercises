let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = [];

function removeNonInteger(array) {
  return array.filter(Number.isInteger);
};

newArray = removeNonInteger(array);
console.log(newArray);