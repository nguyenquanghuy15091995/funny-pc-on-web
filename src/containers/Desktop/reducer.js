import { fromJS } from 'immutable';

import {
  HIDE_DESKTOP,
  SHOW_DESKTOP,
} from './constants';

const initState = fromJS({
  visible: false,
});

function desktopReducer(state = initState, action) {
  switch (action.type) {
    case HIDE_DESKTOP:
      return state.set('visible', false);
    case SHOW_DESKTOP:
      return state.set('visible', true);
    default:
      return state;
  }
}

export default desktopReducer;
