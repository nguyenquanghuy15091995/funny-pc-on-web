import { fromJS } from 'immutable';

import {
  WHITE_LED,
} from 'utils/colors';

import {
  LOAD_OS,
  TERMINAL_OS,
  HIDE_WELCOME,
  SHOW_WELCOME,
  END_SHUT_DOWN,
  START_SHUT_DOWN,
  SELECT_SETTING_ITEM,
} from './constants';
import { SETTING_MENU_ITEMS } from '../SettingTab/constants';

const initState = fromJS({
  os: {
    loaded: false,
    welcomeVisible: false,
    shutingDown: false,
  },
  setting: {
    ledColor: {
      off: WHITE_LED.OFF,
      on: WHITE_LED.ON,
    },
    settingItemId: 1,
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
    case SELECT_SETTING_ITEM:
      return state.setIn(['setting', 'settingItemId'], action.itemId);
    default:
      return state;
  }
}

export default globalReducer;
