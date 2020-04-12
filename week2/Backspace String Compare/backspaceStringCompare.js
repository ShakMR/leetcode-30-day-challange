
let decide = (char, nSharps, index) => {
  if (char !== '#' && nSharps === 0) {
    return [nSharps, index, true];
  }

  let changeNSharp = char === '#' ? nSharps + 1: nSharps - 1;

  return [changeNSharp, index - 1, false];
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let i = S.length-1;
  let j = T.length-1;
  let equals = true;
  let nSharps1 = 0;
  let nSharps2 = 0;

  while (i > -1 || j > -1) {
    const c1 = i > -1 ? S[i] : '';
    const c2 = j > -1 ? T[j] : '';
    let is1Ready;
    let is2Ready;

    [nSharps1, i, is1Ready] = decide(c1, nSharps1, i);
    [nSharps2, j, is2Ready] = decide(c2, nSharps2, j);

    if (is1Ready && is2Ready) {
      if (c1 === c2) {
        i--;
        j--;
      } else {
        return false;
      }
    }
  }
  return equals;
};

module.exports = backspaceCompare;
