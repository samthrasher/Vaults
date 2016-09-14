import {Marble, Axis} from './game_utils';

export const Levels = {
  1: {
    gameState: {
      marbles: [0,1,2,3,4].map(i => new Marble(i, i)),
      goal: [0,1,2,3,4],
      axes: [
        new Axis(0, [0, 1, 2], [], {
          radius: 150,
          x: -285,
          y: 50,
          angle: 0
        }),
        new Axis(1, [0, 3, 4], [], {
          radius: 150,
          x: -15,
          y: 50,
          angle: 180
        })
      ],
      lastMove: {key: null, direction: null}
    }
  }

};

export default Levels;
