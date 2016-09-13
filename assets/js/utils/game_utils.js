export class Marble {
  constructor(key, color) {
    this.key = key;
    this.color = color;
  }

  dup() {
    return new Marble(this.key, this.color);
  }
}

export class Axis {
  constructor(key, marbleIndices, linkedAxes = []) {
    this.key = key;
    this.marbleIndices = marbleIndices;
    this.linkedAxes = linkedAxes;
  }
}

export const cycle = (marbles, axis, dir = 1) => {
  const newMarbles = marbles.map(marble => marble.dup());
  const l = axis.marbleIndices.length;

  const rotatedMarbles = axis.marbleIndices.map(
    i => newMarbles[(i - dir + l) % l]
  );

  axis.marbleIndices.forEach(i => {
    newMarbles[i] = rotatedMarbles[i];
  });

  return newMarbles;
};
