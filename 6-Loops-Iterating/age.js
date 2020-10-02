let rlSync = require('readline-sync');
let age = Number(rlSync.question("What's your age?\n"));
let years = [10, 20, 30, 40];

console.log(`You are ${age} years old.`);

for (let index = 0; index < years.length; index += 1) {
  console.log("In " + String(years[index]) + " years, you will be " + Number(age + years[index]) + " years old."); 
}