/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  return checkValidDynamic(s, 0, 0, 0);
};

const checkValidDynamic = (s, index, left, right) => {
  const c = s[index];
  if (!c) {
    return left === right;
  }

  let result;
  switch (c) {
    case '(':
      result = (checkValidDynamic(s, index+1, left+1, right))
      break;
    case ')':
      if (left <= right) {
        return false;
      }
      result = (checkValidDynamic(s, index+1, left, right+1))
      break;
    case '*':
      result = (checkValidDynamic(s, index+1, left+1, right))
        || (checkValidDynamic(s, index+1, left, right+1))
        || (checkValidDynamic(s, index+1, left, right));
  }
  return result;
}

module.exports = checkValidString;
