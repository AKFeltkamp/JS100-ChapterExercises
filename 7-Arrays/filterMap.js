let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let newArr = [];

for (let i = 0; i < arr.length; i ++) {
  newArr.push(Number(arr[i].length));
}

console.log(newArr.filter(Number => Number % 2 !== 0));