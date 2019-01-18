import { fromJS } from 'immutable';

import {
  TURN_OFF,
  TURN_ON,
  MONITOR_STATE,
} from './constants';

const initState = fromJS({
  monitorState: MONITOR_STATE.OFF,
});

function monitorReducer(state = initState, action) {
  switch (action.type) {
    case TURN_OFF:
      return state.set('monitorState', MONITOR_STATE.OFF);
    case TURN_ON:
      return state.set('monitorState', MONITOR_STATE.ON);
    default:
      return state;
  }
}

export default monitorReducer;
