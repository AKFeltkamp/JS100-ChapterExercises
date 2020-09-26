function evenOrOdd(prompt) {
  let rlSync = require('readline-sync');
  prompt = rlSync.question('Enter a number\n');
  if (prompt % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};
evenOrOdd();