import { connect } from 'react-redux';
import ScoreContainer from './score';

const mapStateToProps = state => ({
  level: 1,
  numMoves: state.gameState.numMoves,
  solved: state.gameState.solved
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreContainer);
