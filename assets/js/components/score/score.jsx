import React, { PropTypes } from 'react';

const Score = ({level, numMoves, solved, loadLevel}) => {
  return (
    <section className="info">
      <strong>Level:</strong> <span> {level} </span>
      <strong>Moves:</strong> <span> {numMoves} </span>
      {solved ? <button
        className="next-level"
        onClick={() => loadLevel(level + 1)}> Next Level</button> : ""}
    </section>
  );
};

export default Score;
