/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const firstLetter = words.map(w => w[0]);
  const wordLength = words[0].length;
  const positions = []; //found indeces
  
  let i = 0;
  let j = 0;
  
  let wordsCopy = [...words];
  while(i < s.length) {
    const word = s.substr(j, wordLength);
    if (wordsCopy.includes(word)) {
      j = j + wordLength;
      wordsCopy.splice(wordsCopy.indexOf(word), 1)
      if (wordsCopy.length === 0) {
        positions.push(i);
        i++;
        j = i;
        wordsCopy = [...words];
      }
    } else {
      i++;
      j = i;
      wordsCopy = [...words]
    }
  }
  
  return positions;
};

module.exports = findSubstring;
