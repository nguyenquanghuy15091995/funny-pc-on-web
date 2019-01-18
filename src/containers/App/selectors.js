import { createSelector } from 'reselect';

const selectCase = (state) => state.get('global');

export const makeSelectOS = () => createSelector(selectCase, OSState =>
  OSState.get('os').toJS(),
);
