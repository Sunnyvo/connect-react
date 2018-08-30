
import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {logger} from 'redux-logger'
// import ListsDefaultReducer from '../reducers/lists_default_reducer'
// import ActivePlatformReducer from '../reducers/reducer-active-platform'
import thunk from 'redux-thunk';
const middleware = applyMiddleware(
  thunk,
  // logger,
);


const reducers = combineReducers({
  // lists: ListsDefaultReducer
  // activePlatform: ActivePlatformReducer,
})


export default createStore(reducers, middleware);
