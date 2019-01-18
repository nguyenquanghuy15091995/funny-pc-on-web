import { createSelector } from 'reselect';

const selectCase = (state) => state.get('case');

export const makeSelectPowerState = () => createSelector(selectCase, caseState =>
  caseState.get('powerState'),
);
