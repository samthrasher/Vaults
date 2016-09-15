import React, { PropTypes } from 'react';
import PuzzleContainer from './puzzle/puzzle_container';
import ScoreContainer from './score/score_container';


const Game = () => {
  return (
    <div>
      <PuzzleContainer/>
      <ScoreContainer />
    </div>
  );
};

export default Game;
