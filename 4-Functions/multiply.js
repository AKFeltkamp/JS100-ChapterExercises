function multiply(a, b) {
  return a * b;
}

function getAnswer(prompt) {
  let rlSync = require('readline-sync');
  let info = rlSync.question(prompt);
  return Number(info);
}

let number1 = getAnswer('Enter first number: ');
let number2 = getAnswer('Enter second number: ');
let answer = multiply(number1, number2);
console.log(`${number1} times ${number2} equals ${answer}`);