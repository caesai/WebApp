import popups from './popups';
import user from './auth';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({popups, user, routing: routerReducer});

export default rootReducer;
