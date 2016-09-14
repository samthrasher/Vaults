import React, { PropTypes } from 'react';
import Axis from './axis';
import Marble from './marble';
import GoalDot from './goal_dot';


const Puzzle = ({axes, marbles, goal, lastMove, triggerAxis}) => {

  const placedMarbles = {};
  const displayAxes = axes.map(axis => {
    const displayMarbles = axis.marbleIndices.map(i => {
      if (placedMarbles[i])
        return <div/>;
      else {
        placedMarbles[i] = true;
        return <Marble color={marbles[i].color} key={marbles[i].key}/>;
      }
    });

    return <Axis
      displayOptions={axis.displayOptions}
      active={true}
      triggerAxis={(dir) => triggerAxis(axis.key, dir)}
      key={axis.key}
      moved={parseInt(lastMove.key) === parseInt(axis.key) ? lastMove.direction : false}
      >
      {displayMarbles}
    </Axis>;
  });

  const placedDots = {};
  const goalDots = axes.map(axis => {
    const dots = axis.marbleIndices.map(i => {
      if (placedDots[i])
        return <div/>;
      else {
        placedDots[i] = true;
        return <GoalDot color={goal[i]} key={i}/>;
      }
    });

    return <Axis
      displayOptions={axis.displayOptions}
      active={false}
      key={axis.key + "g"}>
      {dots}
    </Axis>;
  });

  //const goalDots = <div/>;

  return (
    <div className="puzzle">
      {displayAxes.reverse()}
      {goalDots.reverse()}
    </div>
  );
};

export default Puzzle;
