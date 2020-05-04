/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let complement = 0;
  let bit = 1;
  while(num > 0) {
    if (num % 2 === 0) {
      complement += bit;
    }
    num >>= 1;
    bit <<= 1;
  }
  return complement;
};

module.exports = findComplement;
