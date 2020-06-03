/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let median;
  let a = nums1.concat(nums2).sort((a,b) => a-b);

  const middle = a.length / 2;
  if (a.length % 2 === 0) {
    median = (a[middle-1] + a[middle]) / 2;
  } else {
    median = a[Math.floor(middle)];
  }

  return median;
};

module.exports = findMedianSortedArrays;
