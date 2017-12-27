import popups from './popups';
import authState from './auth';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({popups, authState, routing: routerReducer});

export default rootReducer;
