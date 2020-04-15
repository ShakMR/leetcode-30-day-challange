/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort();
  let previous = nums[0];
  let appeared = 1;
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (previous === n) {
      appeared++;
    } else if (appeared === 1) {
      return previous;
    } else {
      previous = n;
      appeared = 1;
    }
  }
  return previous;
};

const input = [4,1,2,1,2];
console.log(singleNumber(input));