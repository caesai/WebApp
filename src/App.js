import React from 'react';
import { connect } from 'react-redux';
import {  withRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/Header';
import Footer from './components/Footer';
// import PopUp from './components/PopUp';

import routes from './routes';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened
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
