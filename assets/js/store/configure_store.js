import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/_root_reducer';
import linkedAxisResolver from '../middleware/linked_axis_resolver';

const defaultState = {
  gameState: {
    //this space left intentionally blank
  }
};

export const configureStore = (preloadedState = defaultState) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(linkedAxisResolver)
  );
