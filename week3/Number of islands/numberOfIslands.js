const printMap = grid => {
  console.log('\n####################');
  console.log(grid.join('\n'));
  console.log('####################\n');
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
  if (cI < columnLength - 1) { next.push([cI + 1, cJ])}
  if (cJ < rowLength - 1) { next.push([cI, cJ+1])}
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
  const nextCoords = [[0, 0]];
  while (next = nextCoords.shift()) {
    const [i, j] = next;
    let current = grid[i][j];
    const adjacent = getNextCoords(i, j, grid);

    if (current === '0') {
      grid[i][j] = '_'
    } else if (current === '1') {
      grid[i][j] = 'X' // visited and counted as island
      current = 'X';
      nIslands++;
    }

    adjacent.forEach(([x, y]) => {
      const nextValue = grid[x][y];
      if (!['_', 'X'].includes(nextValue)) {
        nextCoords.push([x,y])
      }
      if (nextValue === '1' && current === 'X') {
        grid[x][y] = 'X';
      }
    });
  }
  return nIslands;
};

module.exports = numIslands;
