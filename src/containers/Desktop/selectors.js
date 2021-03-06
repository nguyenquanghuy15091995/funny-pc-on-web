import { createSelector } from 'reselect';

const selectDesktop = (state) => state.get('desktop');

export const makeSelectDesktopVisible = () => createSelector(selectDesktop, desktopState =>
  desktopState.get('visible'),
);

export const makeSelectMenuItemId = () => createSelector(selectDesktop, desktopState =>
  desktopState.get('currentMenuItemId'),
);
