/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = function(binaryMatrix) {
  const [n, m] = binaryMatrix.dimensions();

  let leftMost = -1;

  let [x, y] = [0, m - 1];

  while (x < n && y >= 0) {
    const value = binaryMatrix.get(x, y);
    if (value === 1) {
      leftMost = y;
      y--;
    } else if (value === 0) {
      x++;
    }
  }

  return leftMost;
};

module.exports = leftMostColumnWithOne;
