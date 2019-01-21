import {
  LOAD_OS,
  TERMINAL_OS,
  HIDE_WELCOME,
  SHOW_WELCOME,
  END_SHUT_DOWN,
  START_SHUT_DOWN,
  SELECT_SETTING_ITEM,
} from './constants';

export function loadOS() {
  return {
    type: LOAD_OS,
  };
}

export function terminalOS() {
  return {
    type: TERMINAL_OS,
  };
}

export function hideWelcome() {
  return {
    type: HIDE_WELCOME,
  };
}

export function showWelcome() {
  return {
    type: SHOW_WELCOME,
  };
}

export function startShutdown() {
  return {
    type: START_SHUT_DOWN,
  };
}

export function endShutdown() {
  return {
    type: END_SHUT_DOWN,
  };
}

export function selectSettingItem(id) {
  return {
    type: SELECT_SETTING_ITEM,
    itemId: id,
  };
}
