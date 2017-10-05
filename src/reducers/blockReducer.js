export default (state={ sub:[],blocks:[] }, action) => {
  const newState = { sub:[], blocks:[] }
  switch (action.type) {
    case 'ADD_BLOCK': {
      guid();
      break;
    }
    case 'REMOVE_BLOCK': {
      break;
    }
    case 'MOVE_BLOCK': {
      break;
    }
    case 'CHANGE_SETTINGS' : {
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