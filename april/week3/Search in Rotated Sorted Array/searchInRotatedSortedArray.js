const isSubArraySorted = (array, i, j) => {
  return array[i] < array[j];
}

const dicoSearch = (array, target, i, j) => {
  if (i === j) {
    return array[i] === target ? i : -1;
  }
  const middle = Math.floor((i + j) / 2);
  if (isSubArraySorted(array, i, j)) {
    if (array[middle] > target) {
      return dicoSearch(array, target, i, middle);
    } else if (array[middle] < target) {
      return dicoSearch(array, target, middle+1);
    }
    return middle;
  } else {
    const left = dicoSearch(array, target, i, middle);
    const right = left === -1 ? dicoSearch(array, target, middle+1, j) : left;
    return left === -1 ? right : left;
  }
}

const nonRecursiveDico = (array, target, I, J) => {
  const positionStacks = [[I, J]];
  let next;
  while (next = positionStacks.shift()) {
    const [i, j] = next;
    if (i === j) {
      continue;
    }
    const middle = Math.floor((i + j) / 2);
    if (isSubArraySorted(array, i, j) && array[i] <= target && array[j] >= target) {
      if (array[middle] > target) {
        positionStacks.unshift([i, middle]);
      } else if (array[middle] < target) {
        positionStacks.unshift([middle + 1, j]);
      } else {
        return middle;
      }
    } else {
      positionStacks.unshift([i, middle]);
      positionStacks.unshift([middle + 1, j]);
    }
  }
  return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) { return -1 }
  return nonRecursiveDico(nums, target, 0, nums.length - 1, 0);
};

module.exports = search;
