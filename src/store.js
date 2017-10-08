import { createStore, combineReducers, applyMiddleware } from 'redux';
import blockReducer from './reducers/blockReducer';
import logger from 'redux-logger';

export default createStore(combineReducers({
  blockReducer,
}),applyMiddleware(logger));