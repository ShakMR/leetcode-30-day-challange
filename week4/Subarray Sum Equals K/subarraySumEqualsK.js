/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let hash = {};
  hash[0] = 1;
  let sum = 0;
  let founds = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const n = hash[sum-k] || 0;
    founds += n;

    hash[sum] = (hash[sum] || 0) + 1;
  }
  return founds;
};

module.exports = subarraySum;
