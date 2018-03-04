import React from 'react';
import { connect } from 'react-redux';
import {  withRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/Header';
import Footer from './components/Footer';
// import PopUp from './components/PopUp';

import routes from './routes';
// import * as geo from './wasm/geoclient.wasm';
import Rust from './wasm/geoclient.js';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened,
  wasm: state.wasm
});
/*
let history = createHistory();
*/
/*
let store = configureStore({});
let token = localStorage.getItem('token');

if (token !== null) {
  store.dispatch(actions.auth({
    name: 'admin',
    isAuthenticated: true,
    token: token
  }));
}
*/

let App = class extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // fetch('./geoclient.wasm')
    // .then(response => response.arrayBuffer())
    // .then(buffer => WebAssembly.compile(new Uint8Array(buffer))) // Get a Module from the buffer
    // .then(module => {
    //     // Get an Instance of the Module
    //     const dependencies = {
    //         'global': {},
    //         'env': {
    //           __extjs_db0226ae1bbecd407e9880ee28ddc70fc3322d9c: () => {},
    //           __extjs_9f22d4ca7bc938409787341b7db181f8dd41e6df: () => {},
    //           __extjs_80d6d56760c65e49b7be8b6b01c1ea861b046bf0: () => {},
    //           __extjs_ff5103e6cc179d13b4c7a785bdce2708fd559fc0: () => {},
    //           __web_on_grow: () => {}
    //
    //         }
    //     };
    //     console.log(module)
    //     return new WebAssembly.instantiate(module, dependencies);
    //   })
    //   .then(instance => {
    //
    //     console.log(instance.exports.hash())
    //   })
    // .then(mod => {
    //   console.log(mod);
    // })
    // console.log()
  }
  render() {
    let PopUp = Loadable({
      loader: () => import('./components/PopUp'),
      loading: () => null
    })
    return (
      <div>
        <Header />
        <div className='pageContent'>
        <div>
          <button onClick={()=>{
            Rust.then( function(client) {
              const result = client.signup('admin', 'admin');
              console.log(result);
            })
          }}>Click me</button>
        </div>
          <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </Switch>
        </div>
        <Footer />
        {this.props.popUpOpened && <PopUp />}
      </div>
    );
  }
}

App = withRouter(connect(mapStateToProps)(App));

export default App;
