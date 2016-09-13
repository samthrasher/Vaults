import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import {configureStore} from './store/configure_store';
import Levels from './utils/levels';
import {triggerAxis} from './actions/game_actions';
window.triggerAxis = triggerAxis;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(Levels[1]);
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
