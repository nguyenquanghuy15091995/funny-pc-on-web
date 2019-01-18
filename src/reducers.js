import { combineReducers } from 'redux-immutable';

import globalReducer from 'containers/App/reducer';
import caseReducer from 'containers/Case/reducer';
import monitorReducer from 'containers/Monitor/reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  case: caseReducer,
  monitor: monitorReducer,
});

export default rootReducer;
