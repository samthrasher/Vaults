import React, { PropTypes } from 'react';
import {Provider} from 'react-redux';
import Game from './game'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Game/>
    </Provider>
  );
};

export default Root;
