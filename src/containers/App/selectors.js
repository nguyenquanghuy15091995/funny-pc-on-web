import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

export const makeSelectOS = () => createSelector(selectGlobal, OSState =>
  OSState.get('os').toJS(),
);

export const makeSelectSetting = () => createSelector(selectGlobal, settingState =>
  settingState.get('setting').toJS(),
);
