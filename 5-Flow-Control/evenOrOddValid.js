function evenOrOdd (prompt) {
  let rlSync = require('readline-sync');
  prompt = rlSync.question('Enter a number\n');
  if (!Number.isInteger(prompt)) {
    console.log('error');
    return;
  } else if (prompt % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};
evenOrOdd();