import { createStore, combineReducers } from 'redux';
import blockReducer from './reducers/blockReducer';

export default createStore(combineReducers({
  blockReducer,
}));