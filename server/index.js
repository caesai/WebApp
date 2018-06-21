import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../src/App';
import { Provider } from 'react-redux';
import configureStore from '../src/store/store';
import routes from '../src/routes/';
import { getBundles } from 'react-loadable/webpack';

import abi from './abi.json';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const forceSsl = require('express-force-ssl');
const cors = require('cors');
// let Web3 = require('web3');
// // let web3 = new Web3();
// let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'));
// // const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/N5uwjPt8eb0Dv6Qn3ixj'));
// // web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/N5uwjPt8eb0Dv6Qn3ixj'));
// const contractAddress = '0xa9a4bdc2ddf0c22a5825b369203b7f714c714d15';
// const contract = new web3.eth.Contract(abi, contractAddress);

const server = http.Server(app);
const io = require('socket.io')(server);
import {ContractConnect} from './ContractConnect';


// web3.eth.getAccounts().then( (accounts) => {
//   console.log(accounts)
// });
// console.log(contract);

// const subscription = web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
//   if (error) return console.error(error);
//
// });
//
// // unsubscribes the subscription
// subscription.unsubscribe((error, success) => {
//   if (error) return console.error(error);
//
//   console.log('Successfully unsubscribed!');
// });

const PORT = process.env.NODE_ENV == 'production' ? 80 : 3000;

express.static.mime.define(
  {
    'text/javascript; charset=utf-8': ['js'],
    'application/json; charset=utf-8': ['json'],
    'application/manifest+json; charset=utf-8': ['webmanifest']
  },
  true
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options('*', cors())

if (process.env.NODE_ENV == 'production') {
  var key = fs.readFileSync(path.resolve(__dirname, '/home/sushka/certs/private.key'), 'utf8');
  // var key = fs.readFileSync(path.resolve(__dirname, '/home/sushka/webapp/ssl/private.key'), 'utf8');
  var cert = fs.readFileSync(path.resolve(__dirname, '/home/sushka/certs/certificate.crt' ), 'utf8');
  // var ca = fs.readFileSync(path.resolve(__dirname, '/home/sushka/webapp/ssl/certificate_ca.crt' ), 'utf8');

  app.use(express.static(path.resolve(__dirname, '/home/sushka/webapp/dist')));
  app.use(express.static(path.resolve(__dirname, '/home/sushka/webapp/wasm')));
  // app.use(forceSsl);

  server.listen(PORT,()=>{
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

app.get('/balance', (req,res,next) => {
  // ContractConnect();
  console.log(req);
})

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
        <title>NuLand - Embedding reality into cyberspace</title>
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
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
    server.listen(PORT, () => {
      console.log(`listening on port: ${PORT}`);
    });
  });
}

let users = {};

const getUsers = () => {
    return Object.keys(users).map(function(key){
        return users[key].username
    });
};

const createSocket = (user) => {
    let cur_user = users[user.uid],
        updated_user = {
            [user.uid] : Object.assign(cur_user, {sockets : [...cur_user.sockets, user.socket_id]})
        };
    users = Object.assign(users, updated_user);
};

const createUser = (user) => {
    users = Object.assign({
        [user.uid] : {
            username : user.username,
            uid : user.uid,
            sockets : [user.socket_id]
        }
    }, users);
};

const removeSocket = (socket_id) => {
    let uid = '';
    Object.keys(users).map(function(key){
        let sockets = users[key].sockets;
        if(sockets.indexOf(socket_id) !== -1){
            uid = key;
        }
    });
    let user = users[uid];
    if(user.sockets.length > 1){
        // Remove socket only
        let index = user.sockets.indexOf(socket_id);
        let updated_user = {
            [uid] : Object.assign(user, {
                sockets : user.sockets.slice(0,index).concat(user.sockets.slice(index+1))
            })
        };
        users = Object.assign(users, updated_user);
    }else{
        // Remove user by key
        let clone_users = Object.assign({}, users);
        delete clone_users[uid];
        users = clone_users;
    }
};


io.on('connection', (socket) => {
    let query = socket.request._query,
        user = {
            username : query.username,
            uid : query.uid,
            socket_id : socket.id
        };

    if(users[user.uid] !== undefined){
        createSocket(user);
        socket.emit('updateUsersList', getUsers());
    }
    else{
        createUser(user);
        io.emit('updateUsersList', getUsers());
    }
    console.log(user);
    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('message', {
            username : data.username,
            message : data.message,
            uid : data.uid
        });
    });

    socket.on('disconnect', () => {
        removeSocket(socket.id);
        io.emit('updateUsersList', getUsers());
    });
});
