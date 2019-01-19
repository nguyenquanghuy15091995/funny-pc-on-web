import React from 'react';
import PowerIcon from 'icons/Power';
import AppsIcon from 'icons/Apps';
import SettingIcon from 'icons/Setting';

const PREFIX = 'desktop';

export const HIDE_DESKTOP = `${PREFIX}/HIDE_DESKTOP`;
export const SHOW_DESKTOP = `${PREFIX}/SHOW_DESKTOP`;

export const SELECT_MENU_ITEM = `${PREFIX}/SELECT_MENU_ITEM`;

export const MENU_ITEMS = [
  { id: 1, name: 'Power', icon: <PowerIcon color="#d50000" size={30} /> },
  { id: 2, name: 'Apps', icon: <AppsIcon color="#6200ea" size={30} /> },
  { id: 3, name: 'Setting', icon: <SettingIcon color="#424242" size={30} /> },
];
