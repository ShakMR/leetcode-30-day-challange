const buildCharsMap = (string) => {
  const map = new Map();
  for (let s of string) {
    const count = map.get(s) || 0;
    map.set(s, count + 1);
  }
  return map;
}
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  const sLength = s.length;
  const pLength = p.length;
  const originalMap = buildCharsMap(p);
  let indeces = [];
  let i = 0;
  while (i < sLength) {
    let abort = false;
    let pVisited = new Map(originalMap);
    let nFound = 0;
    for (let j = 0; j < pLength && !abort; j++) {
      const c = s[i + j];
      const charCount = pVisited.get(c);
      if (charCount) {
        console.log(c, 'IS');
        // found
        pVisited.set(c, charCount - 1);
        nFound++;
        if (nFound === pLength) {
          indeces.push(i);
          abort = true;
          i++;
        }
      } else {
        console.log(c, 'IS NOT IS');
        abort = true;
        i = i + j + 1;
      }
    }
  }
  return indeces;
};

module.exports = findAnagrams;
