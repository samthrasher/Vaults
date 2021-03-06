import React, { PropTypes } from 'react';
import Axis from './axis';
import Marble from './marble';
import GoalDot from './goal_dot';

import {findByKey} from '../../selectors/selectors';

const Puzzle = ({axes, marbles, goal, lastMove, triggerAxis, level}) => {

  if (level > 3) {
    return <h1>
      More levels to come!
    </h1>;
  }

  const placedMarbles = {};
  const triggeredAxisIdx = findByKey(axes, parseInt(lastMove.key));
  const movedAxisKeys = triggeredAxisIdx === -1 ? [] :
    [parseInt(lastMove.key), ...(axes[triggeredAxisIdx].linkedAxes)];

  const displayAxes = axes.map(axis => {
    const displayMarbles = axis.marbleIndices.map(i => {
      if (placedMarbles[i])
        return <div key={"null" + i}/>;
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
      moved={movedAxisKeys.includes(axis.key) ? lastMove.direction : false}
      >
      {displayMarbles}
    </Axis>;
  });

  const placedDots = {};
  const goalDots = axes.map(axis => {
    const dots = axis.marbleIndices.map(i => {
      if (placedDots[i])
        return <div key={"null" + i}/>;
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
