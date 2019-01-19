import { fromJS } from 'immutable';

import {
  HIDE_DESKTOP,
  SHOW_DESKTOP,
  SELECT_MENU_ITEM,
} from './constants';

const initState = fromJS({
  visible: false,
  currentMenuItemId: 0,
});

function desktopReducer(state = initState, action) {
  switch (action.type) {
    case HIDE_DESKTOP:
      return state.set('visible', false);
    case SHOW_DESKTOP:
      return state.set('visible', true);
    case SELECT_MENU_ITEM:
      return state.set('currentMenuItemId', action.menuItemId);
    default:
      return state;
  }
}

export default desktopReducer;
