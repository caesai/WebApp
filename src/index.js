import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './App';

import configureStore from '../src/store/store';
import './scss/base.scss';

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

let store = configureStore(preloadedState);

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
})
