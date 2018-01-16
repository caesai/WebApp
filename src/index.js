import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import {  withRouter, StaticRouter} from 'react-router-dom';
/*import createHistory from 'history/createBrowserHistory';*/
import {LocalStorage} from 'node-localstorage';
import configureStore from './store/store';
import { renderRoutes } from 'react-router-config';
import './scss/base.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

import routes from './routes';
import {actions} from './utils/actions';
import { convertCustomRouteConfig, ensureReady } from './utils/serverRouting';

const routeConfig = convertCustomRouteConfig(routes);

let store = configureStore({});

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened
});

if (typeof localStorage === 'undefined' || localStorage === null) {
  var localStorage = new LocalStorage('./scratch');
}

let token = localStorage.getItem('token');

if (token !== null) {
  store.dispatch(actions.auth({
    name: 'admin',
    isAuthenticated: true,
    token: token
  }));
}

if (typeof window !== 'undefined') {
  ensureReady(routeConfig).then(() => {
    render(
      (
        <BrowserRouter>
          { renderRoutes(routeConfig) }
        </BrowserRouter>
      )
    );
  });
}

let Root = class extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          {this.props.popUpOpened ? <PopUp /> : null}
        </div>
    )
  }
}

Root = withRouter(connect(mapStateToProps)(Root));

export default function render2(location, props) {
  return ensureReady(routeConfig, location).then(() => (
    <Provider store={store}>
      <StaticRouter context={{}} location={location}>
        <div>
          <Header />
          <div>
            {renderRoutes(routeConfig, props)}
          </div>
          <Root />
          <Footer />
        </div>
      </StaticRouter>
    </Provider>
  ));
}
