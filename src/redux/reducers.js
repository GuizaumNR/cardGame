import { combineReducers } from 'redux';

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_GAME':
      return action.players;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  players: playersReducer
});

export default rootReducer;