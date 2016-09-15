import {Marble, Axis} from './game_utils';

export const Levels = {
  1: {
    gameState: {
      marbles: [0,1,2,3,4,5,6,7,8].map(i => new Marble(i, i)),
      goal: [0,1,2,3,4,5,6,7,8],
      axes: [
        new Axis(0, [0, 1, 2, 3, 4], [], {
          radius: 150,
          x: -285,
          y: 50,
          angle: 0
        }),
        new Axis(1, [0, 5, 6, 7, 8], [], {
          radius: 150,
          x: -15,
          y: 50,
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
      marbles: Array(9).fill(new Marble(0,0)).concat(Array(9).fill(new Marble(1,1))),
      goal: Array(9).fill(1).concat(Array(9).fill(0)),
      axes: [
        new Axis(0, [0, 9], [1, 3], {
          radius: 50,
          x: -250,
          y: 50,
          angle: 0
        }),
        new Axis(1, [1, 10], [0, 2, 4], {
          radius: 50,
          x: -50,
          y: 50,
          angle: 0
        }),
        new Axis(2, [2, 11], [1, 5], {
          radius: 50,
          x: 150,
          y: 50,
          angle: 0
        }),


        new Axis(3, [3, 12], [0, 4, 6], {
          radius: 50,
          x: -250,
          y: 150,
          angle: 0
        }),
        new Axis(4, [4, 13], [1, 3, 5, 7], {
          radius: 50,
          x: -50,
          y: 150,
          angle: 0
        }),
        new Axis(5, [5, 14], [2, 5, 8], {
          radius: 50,
          x: 150,
          y: 150,
          angle: 0
        }),

        new Axis(6, [6, 15], [3, 7], {
          radius: 50,
          x: -250,
          y: 250,
          angle: 0
        }),
        new Axis(7, [7, 16], [6, 4, 8], {
          radius: 50,
          x: -50,
          y: 250,
          angle: 0
        }),
        new Axis(8, [8, 17], [7, 5], {
          radius: 50,
          x: 150,
          y: 250,
          angle: 0
        }),
      ],
      lastMove: {key: null, direction: null},
      numMoves: 0,
      won: false
    }
  }
};

export default Levels;
