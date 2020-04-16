/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let localMax = Number.MIN_SAFE_INTEGER;
  let globalMax = Number.MIN_SAFE_INTEGER;
  nums.forEach((n, iter) => {
    const sum = localMax + n;
    globalMax = Math.max(globalMax, sum, n, localMax);
    localMax = Math.max(sum, n);
  });
  return globalMax;
};

module.exports = maxSubArray;
