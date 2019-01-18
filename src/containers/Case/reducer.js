import { fromJS } from 'immutable';

import {
  TURN_OFF,
  TURN_ON,
  POWER_STATE,
} from './constants';

const initState = fromJS({
  powerState: '',
});

function caseReducer(state = initState, action) {
  switch (action.type) {
    case TURN_OFF:
      return state.set('powerState', POWER_STATE.OFF);
    case TURN_ON:
      return state.set('powerState', POWER_STATE.ON);
    default:
      return state;
  }
}

export default caseReducer;
