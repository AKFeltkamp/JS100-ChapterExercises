function factorial(number) {
  let newNumber = 1;
for (let x = number; x > 0; x -= 1) {
    newNumber = newNumber * x; 
  }
  return newNumber;
};

console.log(factorial(4));