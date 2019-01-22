import { combineReducers } from 'redux-immutable';

import globalReducer from 'containers/App/reducer';
import caseReducer from 'containers/Case/reducer';
import monitorReducer from 'containers/Monitor/reducer';
import desktopReducer from 'containers/Desktop/reducer';
import softwareReducer from 'containers/Software/reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  case: caseReducer,
  monitor: monitorReducer,
  desktop: desktopReducer,
  software: softwareReducer,
});

export default rootReducer;
