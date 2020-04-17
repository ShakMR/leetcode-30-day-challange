function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
const printMap = (grid, nIslands) => {
  function clearConsoleAndScrollbackBuffer() {
    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");console.clear();
  }
  // clearConsoleAndScrollbackBuffer();
  console.log('\n####################', nIslands);
  console.log(grid.map(r => r.join('')).join('\n'));
  console.log('####################\n');
  // sleep(100);
}

const changeGrid = (grid, i, j, value) => {
  grid[i][j] = value;
  console.log('change', i, j, value);
  printMap(grid);
}

const getNextCoords = (cI, cJ, grid) => {
  const rowLength = grid[0].length;
  const columnLength = grid.length;
  const next = [];
  if (cJ > 0) { next.push([cI, cJ - 1])}
  if (cI > 0) { next.push([cI - 1, cJ])}
  if (cJ < rowLength - 1) { next.push([cI, cJ + 1])}
  if (cI < columnLength - 1) { next.push([cI + 1, cJ])}
  return next;
}

/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {
    return 0;
  }
  let nIslands = 0;
  let next;
  const nextLand = [[0, 0]];
  const nextSea = [];
  //let's follow the land first
  let n = 0;
  while (next = nextLand.shift() || nextSea.shift()) {
    n++;
    const [i, j] = next;
    let current = grid[i][j];
    const adjacent = getNextCoords(i, j, grid);

    if (current === '0') {
      grid[i][j] = ' '
    } else if (current === '1') {
      grid[i][j] = 'X' // visited and counted as island
      current = 'X';
      nIslands++;
    }

    adjacent.forEach(([x, y]) => {
      const nextValue = grid[x][y];
      switch (nextValue) {
        case '1':
          nextLand.unshift([x,y]);
          if (current === 'X') {
            grid[x][y] = 'X'; // mark island as counted
          }
          break;
        case '0':
          nextSea.push([x,y]);
          grid[x][y] = ' '; // mark island as counted
          break;
        default:
          //already visited, do nothing
      }
    });
  }
  return nIslands;
};

module.exports = numIslands;
