import React, { PropTypes } from 'react';

const Score = ({level, numMoves, solved}) => {
  return (
    <section className="info">
      <strong>Level:</strong> <span> {level} </span>
      <strong>Moves:</strong> <span> {numMoves} </span>
      {solved ? <button className="next-level">Next Level</button> : ""}
    </section>
  );
};

export default Score;
