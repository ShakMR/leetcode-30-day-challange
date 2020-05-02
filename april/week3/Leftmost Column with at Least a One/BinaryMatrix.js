class BinaryMatrix {
  MAX_GET=1000;
  constructor(matrix) {
    this.matrix = matrix;
    this.counter = 0;
  }

  get(x, y) {
    if (this.counter === this.MAX_GET) {
      throw 'MAX NUMBER OF CALLS TO GET REACHED';
    }

    this.counter++;
    return this.matrix[x][y];
  };

  dimensions() {
    return [this.matrix.length, this.matrix[0].length];
  };

}

module.exports = BinaryMatrix;
