let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let y = 0;
do {
for (let i = 0; i < myArray[y].length; i += 1) {
  let value = myArray[y][i];
  if (value % 2 === 0) {
    console.log(value);
  }
}
y += 1;
} while (y < myArray.length);