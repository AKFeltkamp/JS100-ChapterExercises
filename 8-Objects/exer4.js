let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let objKeys2 = objKeys.map(str => str.toUpperCase());

console.log(objKeys2);
console.log(obj); 