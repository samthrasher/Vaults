import {Marble, Axis} from './game_utils';

export const Levels = {
  1: {
    gameState: {
      marbles: [0,1,2,3,4].map(i => new Marble(i, i)),
      axes: [
        new Axis(0, [0,1], [1]),
        new Axis(1, [2,3], [0])
      ]
    }
  }

};

export default Levels;
