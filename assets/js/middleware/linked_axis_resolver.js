import {findByKey} from '../selectors/selectors.js';
import {TRIGGER_AXIS, cycleAxis} from '../actions/game_actions';

const linkedAxisResolver = ({getState, dispatch}) => next => action => {
  if (action.type === TRIGGER_AXIS) {
    const axes = getState().gameState.axes;
    const triggeredAxis = axes[findByKey(axes, action.key)];
    const linkedAxisKeys = [action.key, ...triggeredAxis.linkedAxes];

    linkedAxisKeys.forEach(
      i => {dispatch(cycleAxis(i, action.direction));}
    );
    return next(action);
  }
  else {
    return next(action);
  }
};

export default linkedAxisResolver;
