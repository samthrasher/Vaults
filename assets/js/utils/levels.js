import {Marble, Axis} from './game_utils';

export const Levels = {
  1: {
    gameState: {
      level: 1,
      marbles: [0,1,2,3,4,5,6,7,8].map(i => new Marble(i, i)),
      goal: [4, 2, 0, 6, 5, 1, 8, 7, 3],
      axes: [
        new Axis(0, [0, 1, 2, 3, 4], [], {
          radius: 150,
          x: -285,
          y: 50,
          z: 0,
          angle: 0
        }),
        new Axis(1, [0, 5, 6, 7, 8], [], {
          radius: 150,
          x: -15,
          y: 50,
          z: 0,
          angle: 180
        })
      ],
      lastMove: {key: null, direction: null},
      numMoves: 0,
      won: false
    }
  },

  2: {
    gameState: {
      level: 2,
      marbles: Array(9).fill(new Marble(0,0)).concat(Array(9).fill(new Marble(1,1))),
      goal: Array(9).fill(1).concat(Array(9).fill(0)),
      axes: [
        new Axis(0, [0, 9], [1, 3], {
          radius: 50,
          x: -200,
          y: 50,
          z: 0,
          angle: 0
        }),
        new Axis(1, [1, 10], [0, 2, 4], {
          radius: 50,
          x: -50,
          y: 50,
          z: 0,
          angle: 0
        }),
        new Axis(2, [2, 11], [1, 5], {
          radius: 50,
          x: 100,
          y: 50,
          z: 0,
          angle: 0
        }),


        new Axis(3, [3, 12], [0, 4, 6], {
          radius: 50,
          x: -200,
          y: 150,
          z: 0,
          angle: 0
        }),
        new Axis(4, [4, 13], [1, 3, 5, 7], {
          radius: 50,
          x: -50,
          y: 150,
          z: 0,
          angle: 0
        }),
        new Axis(5, [5, 14], [2, 4, 8], {
          radius: 50,
          x: 100,
          y: 150,
          z: 0,
          angle: 0
        }),

        new Axis(6, [6, 15], [3, 7], {
          radius: 50,
          x: -200,
          y: 250,
          z: 0,
          angle: 0
        }),
        new Axis(7, [7, 16], [6, 4, 8], {
          radius: 50,
          x: -50,
          y: 250,
          z: 0,
          angle: 0
        }),
        new Axis(8, [8, 17], [7, 5], {
          radius: 50,
          x: 100,
          y: 250,
          z: 0,
          angle: 0
        }),
      ],
      lastMove: {key: null, direction: null},
      numMoves: 0,
      won: false
    }
  },

  3: {
    gameState: {
      level: 3,
      marbles: Array(12).fill().map((_, i) => new Marble(i,i)),
      goal: [6, 2, 0, 3, 5, 10, 9, 7, 11, 1, 8, 4],
      axes: [
        new Axis(3, [ 0, 8, 4], [], {
          radius: 100 * Math.sqrt(1/3) + 15,
          x: -100 * Math.sqrt(1/3) + 150 - 15,
          y: 300 - 50 * Math.sqrt(1/3) - 15,
          z: 3,
          angle: 210,
        }),

        new Axis(5, [ 2, 10, 6], [], {
          radius: 100 * Math.sqrt(1/3) + 15,
          x: -100 * Math.sqrt(1/3) - 150 - 15,
          y: 300 - 150 * Math.sqrt(1/3) - 15,
          z: 3,
          angle: 30,
        }),
        new Axis(4, [ 3, 11, 7], [], {
          radius: 100 * Math.sqrt(1/3) + 15,
          x: -50 * Math.sqrt(1/3) - 15,
          y: 300 - 100 * Math.sqrt(1/3) - 150 - 15,
          z: 3,
          angle: 120
        }),

        new Axis(6, [ 1, 9, 5], [], {
          radius: 100 * Math.sqrt(1/3) + 15,
          x: -150 * Math.sqrt(1/3) - 15,
          y: 300 - 100 * Math.sqrt(1/3) + 150 - 15,
          z: 3,
          angle: 300
        }),
        new Axis(0, [ 0, 1, 2, 3], [], {
          radius: 115,
          x: -115,
          y: 300 - 100 - 15,
          z: 2,
          angle: 0
        }),
        new Axis(1, [ 4, 5, 6, 7], [], {
          radius: 100 * Math.sqrt(3) + 15,
          x: -100 * Math.sqrt(3) - 15,
          y: 300 - (100 * Math.sqrt(3)) - 15,
          z: 1,
          angle: 30
        }),

        new Axis(2, [ 8, 9,10,11], [], {
          radius: 215,
          x: -215,
          y: 300 - 200 - 15,
          z: 0,
          angle: 0
        })
      ],
      lastMove: {key: null, direction: null},
      numMoves: 0,
      won: false
    }
  },

  4: {
    gameState: {
      level: 4,
      moves: 0
    }
  }
};

export default Levels;
