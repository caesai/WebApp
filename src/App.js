import React from 'react';
import { connect } from 'react-redux';
import {  withRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/Header';
import Footer from './components/Footer';

import routes from './routes';
import {apiUrl} from './constants';
import {actions} from './actions';

import {checkStatus, parseJSON} from './utils';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened,
  wasm: state.wasm
});

let App = class extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let loacalData = JSON.parse(localStorage.getItem('geoglobula.auth.token'));
    
    if (loacalData !== null) {
      fetch(apiUrl, {
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(loacalData.token),
            'Accept': 'application/json',
            'Content-Type': 'text/javascript'
        }
      })
      .then(checkStatus)
      // .then(parseJSON)
      .then((resp) => {
        console.log(resp)
        this.props.dispatch(actions.auth(loacalData))
      })
    }
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
