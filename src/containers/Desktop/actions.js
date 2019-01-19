import {
  HIDE_DESKTOP,
  SHOW_DESKTOP,
  SELECT_MENU_ITEM,
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

export function selectMenuItem(itemId) {
  return {
    type: SELECT_MENU_ITEM,
    menuItemId: itemId,
  };
}
