'use strict';
const findLongestWord = function(message) {
  const words = message.split(' ');
  let wordsLong = words[0];

  for (const word of words) {
    if (word.length > wordsLong.length) {
      wordsLong = word;
    }
  }

  return wordsLong;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
