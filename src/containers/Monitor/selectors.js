import { createSelector } from 'reselect';

const selectCase = (state) => state.get('monitor');

export const makeSelecMonitorState = () => createSelector(selectCase, caseState =>
  caseState.get('monitorState'),
);
