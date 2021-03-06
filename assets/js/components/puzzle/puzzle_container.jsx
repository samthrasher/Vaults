import { connect } from 'react-redux';
import Puzzle from './puzzle';
import {triggerAxis} from '../../actions/game_actions';

const mapStateToProps = ({gameState}) => ({
  axes: gameState.axes,
  marbles: gameState.marbles,
  goal: gameState.goal,
  lastMove: gameState.lastMove,
  level: gameState.level
});

const mapDispatchToProps = dispatch => ({
  triggerAxis: (key, dir) => dispatch(triggerAxis(key, dir))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzle);
