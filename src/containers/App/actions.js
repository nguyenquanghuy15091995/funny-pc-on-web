import {
  LOAD_OS,
  TERMINAL_OS,
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
