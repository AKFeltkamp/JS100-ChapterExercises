let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
let text = [];
for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    text.push('even');
  } else {
    text.push('odd');
  }
}
console.log(text);