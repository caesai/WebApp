import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, withRouter} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/store';
import './scss/base.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

import Routes from './routes';
import {actions} from './utils/actions';

let store = configureStore({});

const history = createHistory();

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened
});

let token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(actions.auth({
    name: 'admin',
    isAuthenticated: true,
    token: token
  }));
}

let Root = class extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <Header />
            <div>
                <Routes />
            </div>
          <Footer />
          {this.props.popUpOpened ? <PopUp /> : null}
        </div>
    )
  }
}

Root = withRouter(connect(mapStateToProps)(Root));

export default class WebApp extends React.Component{
  render() {
    return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<WebApp ref={instance => {
  if (instance) {
    // do something
  }
}}/>, document.getElementById('webapp'), function() {
  console.log(this); // instance
});
