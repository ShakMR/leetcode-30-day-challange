/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
  const s1L = s1.length;
  const s2L = s2.length;
  if (s1L === 0) {
    return true;
  }
  if (s2L === 0 ||  s1L > s2L) {
    return false;
  }

  const aCharCode = 'a'.charCodeAt(0);

  let permutationMap = new Array(26).fill(0); //represents all the alphabet


  for (let a of s1) {
    permutationMap[a.charCodeAt(0) - aCharCode]++;
  }


  for (let i = 0; i < (s2L - s1L + 1); i++) {
    let s2PerMap = new Array(26).fill(0);
    for (let j = 0; j < s1L; j++) {
      s2PerMap[s2[i+j].charCodeAt(0) - aCharCode]++;
    }

    if (permutationMap.every((value, index) => s2PerMap[index] === value)) {
      return true;
    }
  }
  return false;
};

module.exports = checkInclusion;
