import {CYCLE_AXIS} from '../actions/game_actions';
import {findByKey} from '../selectors/selectors';
import {cycle, won} from '../utils/game_utils';

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
        lastMove: {
          key: action.key,
          direction: action.direction
        },
        numMoves: state.numMoves + 1,
        solved: won(newMarbles, state.goal)
      };
    }
    default:
      return state;
  }
};

export default gameStateReducer;
