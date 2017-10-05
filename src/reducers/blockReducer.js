export default (state={ sub:[],blocks:[] }, action) => {
  const newState = { sub:[], blocks:[] }
  switch (action.type) {
    case 'ADD_BLOCK': {
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