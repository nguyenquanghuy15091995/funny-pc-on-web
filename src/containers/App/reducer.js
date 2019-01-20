import { fromJS } from 'immutable';

import {
  LOAD_OS,
  TERMINAL_OS,
  HIDE_WELCOME,
  SHOW_WELCOME,
  END_SHUT_DOWN,
  START_SHUT_DOWN,
} from './constants';

const initState = fromJS({
  os: {
    loaded: false,
    welcomeVisible: false,
    shutingDown: false,
  },
});

function globalReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_OS:
      return state.setIn(['os', 'loaded'], true);
    case TERMINAL_OS:
      return state.setIn(['os', 'loaded'], false);
    case HIDE_WELCOME:
      return state.setIn(['os', 'welcomeVisible'], false);
    case SHOW_WELCOME:
      return state.setIn(['os', 'welcomeVisible'], true);
    case START_SHUT_DOWN:
      return state.setIn(['os', 'shutingDown'], true);
    case END_SHUT_DOWN:
      return state.setIn(['os', 'shutingDown'], false);
    default:
      return state;
  }
}

export default globalReducer;
