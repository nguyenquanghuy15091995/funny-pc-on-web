import { fromJS } from 'immutable';

import {
  LOAD_OS,
  TERMINAL_OS,
} from './constants';

const initState = fromJS({
  os: {
    loaded: false,
  },
});

function globalReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_OS:
      return state.setIn(['os', 'loaded'], true);
    case TERMINAL_OS:
      return state.setIn(['os', 'loaded'], false);
    default:
      return state;
  }
}

export default globalReducer;
