import {
  HIDE_DESKTOP,
  SHOW_DESKTOP,
} from './constants';

export function hideDesktop() {
  return {
    type: HIDE_DESKTOP,
  };
}

export function showDesktop() {
  return {
    type: SHOW_DESKTOP,
  };
}
