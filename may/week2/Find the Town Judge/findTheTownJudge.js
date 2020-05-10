class Edge {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}

class Node {
  constructor(id) {
    this.id = id;
    this.outgoingEdges = [];
    this.incomingEdges = [];
  }

  addIncomingEdge(from) {
    this.incomingEdges.push(from);
  }

  addOutgoingEdge(to) {
    this.outgoingEdges.push(to);
  }

  getEdgesNumber() {
    return {
      outgoing: this.outgoingEdges.length,
      incoming: this.incomingEdges.length,
    };
  }
}

const findTheTownJudge = (nPeople, trustArray) => {
  const trustMap = new Map();
  // build graph
  let nodes = [];
  for (let i = 1; i <= nPeople; i++) {
    nodes.push(new Node(i));
  }

  trustArray.forEach(([from, to]) => {
    nodes[from-1].addOutgoingEdge(to);
    nodes[to-1].addIncomingEdge(from);
  });

  for (let i = 0; i < nPeople; i++) {
    const { outgoing, incoming } = nodes[i].getEdgesNumber();
    if (outgoing === 0 && incoming === nPeople-1) {
      return i+1;
    }
  }
  return -1;
}

module.exports = findTheTownJudge;
