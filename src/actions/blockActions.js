import store from '../store';

export const addBlock  = (block) => {
  store.dispatch({
    type: 'ADD_BLOCK',
    payload: block,
  });
}