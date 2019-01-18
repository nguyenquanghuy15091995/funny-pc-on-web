import {
  LOAD_OS,
  TERMINAL_OS,
  HIDE_WELCOME,
  SHOW_WELCOME,
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
