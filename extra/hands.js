const canArrangeHand = (hand, w) => {
  const length = hand.length;
  if (length % w !== 0) {
    return false;
  }

  let groups = [];
  for (let i = 0; i < length / w; i++) {
    groups.push([]); //initialize groups
  }

  const sortedHand = hand.sort(function(a, b){
    return a - b;
  })
  console.log(sortedHand);
  for (let h of sortedHand) {
    let fits = false;
    for (let g of groups) {
      if (g.length < w && (g.length === 0 || g[g.length-1] === h - 1)) {
        g.push(h);
        fits = true;
        break;
      }
    }
    if (!fits) {
      console.log(groups);
      return false;
    }
  }
  console.log(groups);
  return true;
}

const hand = [8,8,9,7,7,7,6,7,10,6]
const w = 2;

console.log(canArrangeHand(hand, w));
