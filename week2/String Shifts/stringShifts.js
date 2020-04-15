const overallShift = (shifts, length) => {
  return shifts.reduce((acc, shift) => {
    const current = acc[shift[0]];
    console.log(shift, current, acc);
    acc[shift[0]] = (current + shift[1]) % length;
    return acc;
  }, [0, 0])
}
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  const [leftShifts, rightShifts] = overallShift(shift, s.length);
  let diff = leftShifts - rightShifts;

  if (diff > 0) {
    diff = diff - s.length;
  }
  const i = s.length + diff;
  const j = s.length;

  return s.substring(i, j) + s.substring(0, i);
};

module.exports = stringShift;