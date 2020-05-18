/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  const sL = s.length;
  const pL = p.length;
  if (pL === 0 || sL === 0 ||  pL > sL) {
    return [];
  }

  const aCharCode = 'a'.charCodeAt(0);

  let permutationMap = new Array(26).fill(0); //represents all the alphabet

  for (let a of p) {
    permutationMap[a.charCodeAt(0) - aCharCode]++;
  }


  let indeces = []
  for (let i = 0; i < (sL - pL + 1); i++) {
    let sPerMap = new Array(26).fill(0);
    for (let j = 0; j < pL; j++) {
      sPerMap[s[i+j].charCodeAt(0) - aCharCode]++;
    }

    if (permutationMap.every((value, index) => sPerMap[index] === value)) {
      indeces.push(i);
    }
  }
  return indeces;
};

module.exports = findAnagrams;
