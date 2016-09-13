import {Marble, Axis} from './game_utils';

export const Levels = {
  1: {
    gameState: {
      marbles: [0,1,2,3,4].map(i => new Marble(i, i)),
      goal: [4,3,2,1,0],
      axes: [
        new Axis(0, [0, 1, 2], [1], {
          size: 300,
          x: -150,
          y: 50,
          angle: 60
        }),
        new Axis(1, [3, 4], [0], {
          size: 100,
          x: 300,
          y: 50,
          angle: 0
        })
      ]
    }
  }

};

export default Levels;
