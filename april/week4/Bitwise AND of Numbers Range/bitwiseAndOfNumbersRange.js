const minNBits = (n) => Math.floor(Math.log2(n))+1;

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function(m, n) {
  const mNBits = minNBits(m);
  const nNbits = minNBits(n);
  if (mNBits !== nNbits) {
    return 0;
  } else {
    let ret = m;
    for (let i = m+1; i <= n; i++) {
      ret &= i;
    }
    return ret;
  }
};

module.exports = rangeBitwiseAnd;
