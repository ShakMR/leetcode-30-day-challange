const printMap = (grid, n) => {
  // clearConsoleAndScrollbackBuffer();
  console.log('\n####################', n);
  console.log(grid.map(r => r.join('')).join('\n'));
  console.log('####################\n');
  // sleep(100);
}

class PriorityItem {
  constructor(value, x, y) {
    this.value = value;
    this.x = x;
    this.y = y;
  }
}

class PriorityQueue {
  queue = [];

  /**
   *
   * @param {PriorityItem} item
   */
  insert(item) {
    let found = false;
    for (let i = 0; i < this.queue.length && !found; i++) {
      if (this.queue[i].value >= item.value) {
        this.queue.splice(i, 0, item);
        return;
      }
    }
    if (!found) {
      this.queue.push(item);
    }
  }

  popTop() {
    return this.queue.shift();
  }
}


const getNextCoords = (cI, cJ, grid) => {
  const rowLength = grid[0].length;
  const columnLength = grid.length;
  const next = [];
  if (cJ < rowLength - 1) { next.push([cI, cJ + 1])}
  if (cI < columnLength - 1) { next.push([cI + 1, cJ])}
  return next;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const queue = new PriorityQueue();
  queue.insert(new PriorityItem(grid[0][0], 0, 0));
  const lastY = grid[0].length - 1;
  const lastX = grid.length - 1;
  let next;
  while (next = queue.popTop()) {
    const { value, x, y } = next;
    if (x === lastX && y === lastY) {
      return value;
    }
    grid[x][y] = -1;
    const adjacent = getNextCoords(x, y, grid);
    adjacent.forEach(([i, j]) => {
      const nextValue = grid[i][j];

      if (nextValue !== -1) {
        queue.insert(new PriorityItem(value + nextValue, i, j, next));
      }
    });
  }
};

module.exports = minPathSum;
