import { combineReducers } from 'redux-immutable';

import globalReducer from 'containers/App/reducer';
import caseReducer from 'containers/Case/reducer';
import monitorReducer from 'containers/Monitor/reducer';
import desktopReducer from 'containers/Desktop/reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  case: caseReducer,
  monitor: monitorReducer,
  desktop: desktopReducer,
});

export default rootReducer;
