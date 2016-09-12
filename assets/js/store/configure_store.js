import {createStore} from 'react-redux';
import rootReducer from '../reducers/_root_reducer';

const defaultState = {
  gameState: {
    //this space left intentionally blank
  }
};

export const configureStore = (preloadedState = defaultState) =>
  createStore(
    rootReducer,
    preloadedState
  );
