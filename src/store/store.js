import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  let middleware = applyMiddleware(thunkMiddleware);
  let createStoreWithMiddleware = compose(middleware, (typeof window !== 'undefined') && window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
