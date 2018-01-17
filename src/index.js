import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import {  withRouter, StaticRouter, BrowserRouter} from 'react-router-dom';
/*import createHistory from 'history/createBrowserHistory';*/
import { renderRoutes } from 'react-router-config';
import configureStore from './store/store';
import './scss/base.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

import routes from './routes';
import {actions} from './utils/actions';
import { convertCustomRouteConfig, ensureReady } from './utils/serverRouting';

const routeConfig = convertCustomRouteConfig(routes);

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



let store = configureStore({});

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
        <Header />
          {this.props.popUpOpened ? <PopUp /> : null}
          <Footer />
        </div>
    )
  }
}

Root = withRouter(connect(mapStateToProps)(Root));
export default Root;
function render2(location, props) {
  return ensureReady(routeConfig, location).then(() => (
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
  ));
}
