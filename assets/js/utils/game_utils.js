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
  constructor(key, marbleIndices, linkedAxes = [], displayOptions) {
    this.key = key;
    this.marbleIndices = marbleIndices;
    this.linkedAxes = linkedAxes;
    this.displayOptions = displayOptions;
  }
}

export const cycle = (marbles, axis, dir = 1) => {
  const newMarbles = marbles.map(marble => marble.dup());
  const l = axis.marbleIndices.length;

  const rotatedIndices = axis.marbleIndices.map(
    (_, i) => axis.marbleIndices[(i - dir + l) % l]
  );
  const rotatedMarbles = rotatedIndices.map(i => newMarbles[i]);

  axis.marbleIndices.forEach((marbleIndex, i) => {
    newMarbles[marbleIndex] = rotatedMarbles[i];
  });

  return newMarbles;
};

export const won = (marbles, goal) => marbles.every(
  (marble, i) => marble.color === goal[i]
);
