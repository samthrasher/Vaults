import {CYCLE_AXIS} from '../actions/game_actions';
import {findByKey} from '../selectors/selectors';
import {cycle} from '../utils/game_utils';

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
        goal: state.goal
      };
    }
    default:
      return state;
  }
};

export default gameStateReducer;
