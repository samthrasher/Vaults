import { connect } from 'react-redux';
import {loadLevel} from '../../actions/game_actions';
import ScoreContainer from './score';

const mapStateToProps = state => ({
  level: state.gameState.level,
  numMoves: state.gameState.numMoves,
  solved: state.gameState.solved
});

const mapDispatchToProps = dispatch => ({
  loadLevel: level => dispatch(loadLevel(level))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreContainer);
