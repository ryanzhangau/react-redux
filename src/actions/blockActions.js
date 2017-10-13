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
    payload: {id: blockId, data: newData},
  })
}

export const removeBlock = (blockId) => {
  store.dispatch({
    type: 'REMOVE_BLOCK',
    payload: blockId
  })
}