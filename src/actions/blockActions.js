import store from '../store';

export const addBlock  = (block) => {
  store.dispatch({
    type: 'ADD_BLOCK',
    payload: block,
  });
}

export const updateData = (blockId, newData) => {
  store.dispatch({
    type: 'CHANGE_SETTINGS',
    payload: {id: blockId, data: newData}
  })
}