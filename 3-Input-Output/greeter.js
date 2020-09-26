function getInfo(prompt) {
  let rlSync = require('readline-sync');
  let info = rlSync.question(prompt);
  return info;
};

let firstName = getInfo('What is your first name? ');
let lastName = getInfo('What is your last name? ');
let homeTown = getInfo('What is your hometown? ');
console.log(`Hello, ${firstName} ${lastName} of ${homeTown}!`);

let faveColor = getInfo('What is your favorite color? ');
console.log(`You said ${faveColor}? Interesting...`);