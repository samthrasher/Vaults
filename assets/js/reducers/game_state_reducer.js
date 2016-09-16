import {CYCLE_AXIS, TRIGGER_AXIS, LOAD_LEVEL} from '../actions/game_actions';
import {findByKey} from '../selectors/selectors';
import {cycle, won} from '../utils/game_utils';
import {Levels} from '../utils/levels';

const gameStateReducer = (state = {}, action) => {
  switch(action.type) {
    case CYCLE_AXIS: {
      const axisToCycle = findByKey(state.axes, action.key);
      const newMarbles = cycle(state.marbles, state.axes[axisToCycle], action.direction);
      const newAxes = state.axes.filter(axis => axis.key !== action.key);
      newAxes.unshift(state.axes[axisToCycle]);
      return {
        axes: newAxes,
        marbles: newMarbles,
        goal: state.goal,
        level: state.level,
        lastMove: state.lastMove,
        numMoves: state.numMoves,
        solved: won(newMarbles, state.goal)
      };
    }

    case TRIGGER_AXIS: {
      return {
        axes: state.axes,
        marbles: state.marbles,
        goal: state.goal,
        level: state.level,
        lastMove: {
          key: action.key,
          direction: action.direction
        },
        numMoves: state.numMoves + 1,
        solved: state.solved
      };
    }

    case LOAD_LEVEL: {
      return Levels[action.level].gameState;
    }

    default:
      return state;
  }

};

export default gameStateReducer;
