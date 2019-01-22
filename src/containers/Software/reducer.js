import { fromJS } from 'immutable';

import {
  CLOSE_SOFTWARE,
  OPEN_SOFTWARE,
} from './constants';

const initState = fromJS({
  softwareVisable: false,
  currentSoftwareId: 0,
});

function softwareReducer(state = initState, action) {
  switch (action.type) {
    case OPEN_SOFTWARE:
      return state.set('softwareVisable', true)
        .set('currentSoftwareId', action.softwareId);
    case CLOSE_SOFTWARE:
      return state.set('softwareVisable', false)
        .set('currentSoftwareId', 0);
    default:
      return state;
  }
}

export default softwareReducer;
