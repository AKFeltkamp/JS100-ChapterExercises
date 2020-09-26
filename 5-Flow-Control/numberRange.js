
function numberRange (number) {
  let rlSync = require('readline-sync');
  number = rlSync.question('Enter a number\n');
  switch (number) {
    case number < 0:
      console.log(`${number} is less than 0`);
      break;
    case number <= 50:
      console.log(`${number} is between 0 and 50`);
      break;
    case number <= 100:
      console.log(`${number} is between 50 and 100`);
      break;
    case number > 100:
      console.log(`${number} is greater than 100`);
      break;
  }
};
numberRange();