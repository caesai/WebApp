import popups from './popups';
import user from './user';
import wasm from './wasm';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({popups, user, routing: routerReducer, wasm});

export default rootReducer;
