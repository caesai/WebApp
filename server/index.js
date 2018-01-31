import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../src/App';
import { Provider } from 'react-redux';
import configureStore from '../src/store/store';
import routes from '../src/routes/';

const path = require('path');

const PORT = 3000;

const app = express();

express.static.mime.define(
  {
    'text/javascript; charset=utf-8': ['js'],
    'application/json; charset=utf-8': ['json'],
    'application/manifest+json; charset=utf-8': ['webmanifest']
  },
  true
);

app.use(express.static('./dist'));

app.get('*', (req, res, next) => {
  const store = configureStore({});
  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);
  Promise.all(promises)
    .then(() => {
  const preloadedState = store.getState();
  const markup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter context={preloadedState} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>WebApp - React based web application</title>
        <link rel="stylesheet" href="/css/styles.css">
        <script type="text/javascript" src="/js/manifest.bundle.js" defer></script>
        <script type="text/javascript" src="/js/vendor.bundle.js" defer></script>
        <script type="text/javascript" src="/js/main.bundle.js" defer></script>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </head>
      <body>
        <div id="root">${markup}</div>
      </body>
    </html>
  `);
})
 .catch(next);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
