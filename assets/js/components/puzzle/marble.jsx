import React, { PropTypes } from 'react';
import {COLORS} from '../../utils/colors.js';

const Marble = ({color}) => {
  return (
    <div className="marble" style={{backgroundColor: COLORS[color]}}/>
  );
};

export default Marble;
