import { fromJS } from 'immutable';

import {
  LOAD_OS,
  TERMINAL_OS,
  HIDE_WELCOME,
  SHOW_WELCOME,
} from './constants';

const initState = fromJS({
  os: {
    loaded: false,
    welcomeVisible: false,
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
    default:
      return state;
  }
}

export default globalReducer;
