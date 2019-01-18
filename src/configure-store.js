import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from './reducers';

const initialState = Immutable.Map();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
function configStore() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(
        thunk,
      ),
    ),
  );
}

export default configStore;
