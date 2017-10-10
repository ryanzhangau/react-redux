export default (state={ sub:[],blocks:[] }, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ADD_BLOCK': {
      insertBlock(newState, action.payload);
      break;
    }
    case 'REMOVE_BLOCK': {
      break;
    }
    case 'MOVE_BLOCK': {
      break;
    }
    case 'CHANGE_SETTINGS' : {
      const index = newState.sub.indexOf(action.payload.id);
      const attr = action.payload.data.attr;
      newState.blocks[index].data[attr] = action.payload.data.value;
      break;
    }
    default: {
      return state;
    }
  }
  return newState;
}

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

const insertBlock = (state, block) => {
  const id = block.id === '' ? guid() : block.id;
  const index = state.sub.indexOf(block.dropAt);
  if (index > -1) {
    state.sub.splice(index, 0, id);
    state.blocks.splice(index, 0, {...block, id})
  } else {
    state.sub.push(id);
    state.blocks.push({ ...block, id });
  }
}