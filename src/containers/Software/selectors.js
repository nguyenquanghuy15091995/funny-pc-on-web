import { createSelector } from 'reselect';

const selectSoftware = (state) => state.get('software');

export const makeSelectSoftwareVisible = () => createSelector(selectSoftware, softwareState =>
  softwareState.get('softwareVisable'),
);

export const makeSelectSoftwareId = () => createSelector(selectSoftware, softwareState =>
  softwareState.get('currentSoftwareId'),
);
