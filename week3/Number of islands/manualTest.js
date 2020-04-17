const numberOfIslands = require('./numberOfIslands');


const input = [
  ["1","0","0","1","1","1","0","1","1","0","0","0","0","0","0","0","0","0","0","0"],
  ["1","0","0","1","1","0","0","1","0","0","0","1","0","1","0","1","0","0","1","0"],
  ["0","0","0","1","1","1","1","0","1","0","1","1","0","0","0","0","1","0","1","0"],
  ["0","0","0","1","1","0","0","1","0","0","0","1","1","1","0","0","1","0","0","1"],
  ["0","0","0","0","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0"],
  ["1","0","0","0","0","1","0","1","0","1","1","0","0","0","0","0","0","1","0","1"],
  ["0","0","0","1","0","0","0","1","0","1","0","1","0","1","0","1","0","1","0","1"],
  ["0","0","0","1","0","1","0","0","1","1","0","1","0","1","1","0","1","1","1","0"],
  ["0","0","0","0","1","0","0","1","1","0","0","0","0","1","0","0","0","1","0","1"],
  ["0","0","1","0","0","1","0","0","0","0","0","1","0","0","1","0","0","0","1","0"],
  ["1","0","0","1","0","0","0","0","0","0","0","1","0","0","1","0","1","0","1","0"],
  ["0","1","0","0","0","1","0","1","0","1","1","0","1","1","1","0","1","1","0","0"],
  ["1","1","0","1","0","0","0","0","1","0","0","0","0","0","0","1","0","0","0","1"],
  ["0","1","0","0","1","1","1","0","0","0","1","1","1","1","1","0","1","0","0","0"],
  ["0","0","1","1","1","0","0","0","1","1","0","0","0","1","0","1","0","0","0","0"],
  ["1","0","0","1","0","1","0","0","0","0","1","0","0","0","1","0","1","0","1","1"],
  ["1","0","1","0","0","0","0","0","0","1","0","0","0","1","0","1","0","0","0","0"],
  ["0","1","1","0","0","0","1","1","1","0","1","0","1","0","1","1","1","1","0","0"],
  ["0","1","0","0","0","0","1","1","0","0","1","0","1","0","0","1","0","0","1","1"],
  ["0","0","0","0","0","0","1","1","1","1","0","1","0","0","0","1","1","0","0","0"]
];

// const input = [["0","1","0","0","1","1","1","0","0","0","0","0","1","0","0","0","0","1","0","1"],["1","0","1","0","0","1","1","0","0","1","0","1","0","1","0","1","1","0","0","0"],["0","1","0","0","0","1","1","1","1","0","0","0","0","0","1","1","1","1","0","1"],["1","1","0","0","0","1","1","0","0","0","1","1","1","0","0","1","0","1","1","0"],["0","1","0","1","1","0","1","0","0","0","1","0","0","1","0","0","0","0","0","1"],["1","0","0","1","0","1","0","0","0","1","1","0","1","0","0","1","0","0","0","0"],["1","0","0","0","1","1","0","0","0","0","0","1","0","0","1","0","0","0","0","1"],["1","0","0","0","1","0","1","1","1","0","1","0","1","1","1","1","0","0","0","1"],["1","0","0","1","0","0","0","1","0","0","0","0","0","0","0","0","0","1","0","1"],["0","0","0","1","0","1","1","1","1","1","1","1","1","1","0","0","0","0","1","0"],["1","0","1","0","1","0","0","1","1","1","0","1","1","0","0","1","1","0","0","0"],["0","1","0","0","1","0","0","0","0","0","0","1","1","1","1","0","0","0","1","0"],["1","0","0","0","1","1","1","0","1","0","0","0","1","0","1","0","1","0","0","1"],["0","0","0","0","1","0","1","1","0","1","0","1","0","1","1","1","1","0","0","0"],["0","1","1","0","0","0","0","1","0","0","1","1","1","0","0","1","1","0","1","0"],["1","0","1","1","1","1","1","1","0","1","1","0","1","0","0","1","0","0","0","1"],["1","0","0","0","1","0","1","0","0","1","0","1","0","0","1","0","0","1","1","1"],["0","0","1","0","0","0","0","1","0","0","1","1","0","1","1","1","0","0","0","0"],["0","0","1","0","0","0","0","0","0","1","1","0","1","0","1","0","0","0","1","1"],["1","0","0","0","1","0","1","1","1","0","0","1","0","1","0","1","1","0","0","0"]];
// const input = [
//   ['0','0','0','0','0'],
//   ['0','0','1','1','0'],
//   ['0','1','0','1','0'],
//   ['0','1','1','1','0'],
//   ['0','0','0','0','0'],
// ]
console.log(numberOfIslands(input));