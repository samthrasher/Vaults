import React, { PropTypes } from 'react';
import {COLORS} from '../../utils/colors.js';

const GoalDot = ({color}) => {
  return (
    <div className="goal-dot" style={{backgroundColor: COLORS[color]}}/>
  );
};

export default GoalDot;
