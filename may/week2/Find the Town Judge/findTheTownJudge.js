const findJudge = (nPeople, trustArray) => {
  const canBeJudge = (new Array(nPeople)).fill(0);

  trustArray.forEach(([from, to]) => {
    canBeJudge[to-1]++;
    canBeJudge[from-1] = -1;
  });

  for (let i = 0; i < nPeople; ++i) {
    const j = canBeJudge[i];
    if (j === nPeople - 1) {
      return i + 1;
    }
  }
  return -1;
}

module.exports = findJudge;
