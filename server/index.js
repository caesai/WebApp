import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../src/App';
import { Provider } from 'react-redux';
import configureStore from '../src/store/store';
import routes from '../src/routes/';
import { getBundles } from 'react-loadable/webpack';

const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const forceSsl = require('express-force-ssl');
const cors = require('cors');

const PORT = process.env.NODE_ENV == 'production' ? 80 : 3000;

express.static.mime.define(
  {
    'text/javascript; charset=utf-8': ['js'],
    'application/json; charset=utf-8': ['json'],
    'application/manifest+json; charset=utf-8': ['webmanifest']
  },
  true
);

if (process.env.NODE_ENV == 'production') {
  var key = fs.readFileSync(path.resolve(__dirname, '/home/sushka/certs/private.key'), 'utf8');
  // var key = fs.readFileSync(path.resolve(__dirname, '/home/sushka/webapp/ssl/private.key'), 'utf8');
  var cert = fs.readFileSync(path.resolve(__dirname, '/home/sushka/certs/certificate.crt' ), 'utf8');
  // var ca = fs.readFileSync(path.resolve(__dirname, '/home/sushka/webapp/ssl/certificate_ca.crt' ), 'utf8');

  app.use(express.static(path.resolve(__dirname, '/home/sushka/webapp/dist')));
  app.use(express.static(path.resolve(__dirname, '/home/sushka/webapp/wasm')));
  // app.use(forceSsl);
  app.use(cors());

  http.createServer(app).listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
  });

  // https.createServer({
  //   key: key,
  //   cert: cert,
  //   // ca: ca,
  //   requestCert: false,
  //   rejectUnauthorized: false
  //   }, app).listen(443);
} else {
  app.use(express.static('./dist'));
  app.use(express.static('./wasm'));
  app.use(cors());
}

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
  let modules = [];
  const markup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter context={preloadedState} location={req.url}>
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <App/>
        </Loadable.Capture>
      </StaticRouter>
    </Provider>
  );
  let bundles = getBundles({}, modules);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>WebApp - React based web application</title>
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="preload" as="script" href="/js/main.bundle.js">
        ${bundles.map(bundle => {
           return `<link rel="preload" as="script" href="/dist/${bundle.file}"/>`
         }).join('\n')}
      </head>
      <body>
        <div id="root">${markup}</div>
        ${bundles.map(bundle => {
           return `<script src="/dist/${bundle.file}"></script>`
         }).join('\n')}
        <script type="text/javascript" src="/js/main.bundle.js" defer></script>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
  `);
})

 .catch(next);
});

if (process.env.NODE_ENV !== 'production') {
  Loadable.preloadAll().then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port: ${PORT}`);
    });
  });
}
