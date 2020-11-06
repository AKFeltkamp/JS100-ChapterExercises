let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, expression) {
  let matches = [];
  for (let i = 0; i < array.length; i += 1) {
    if (expression.test(array[i])) {
      matches.push(array[i]);
    }
  }
  return matches;
}

console.log(allMatches(words, /lab/)); 