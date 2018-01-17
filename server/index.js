const fs = require('fs');

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import clientConfig from '../webpack/client.dev';
import serverConfig from '../webpack/server.dev';
import { Provider } from 'react-redux';
import configureStore from '../src/store/store';

let store = configureStore({});

const PORT = 3000;

const DEV = process.env.NODE_ENV === 'development'
const publicPath = clientConfig.output.publicPath
const outputPath = clientConfig.output.path
const app = express()

const template = fs.readFileSync('./index.html', 'utf8');

app.use('/dist', express.static(`${__dirname}/dist`));

/*
app.get('*', (req, res) => {

  App.default(req.url).then((reactComponent) => {
    const result = ReactDOMServer.renderToString(
      <Provider store={store}>
        {reactComponent}
      </Provider>
    );
    const html = template.replace('{{thing}}', result);
    res.send(html);
    res.end();
  });
});
*/

const multiCompiler = webpack([clientConfig, serverConfig])
const clientCompiler = multiCompiler.compilers[0]
/*
app.use(webpackDevMiddleware(multiCompiler, { publicPath }))
app.use(webpackHotMiddleware(clientCompiler))
app.use(
  // keeps serverRender updated with arg: { clientStats, outputPath }
  webpackHotServerMiddleware(multiCompiler, {
    serverRendererOptions: { outputPath }
  })
)
*/

const webpackDevMiddlewareInstance = require('webpack-dev-middleware')(multiCompiler);
app.use(webpackDevMiddlewareInstance);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
