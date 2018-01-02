import React from 'react';
import {Route, Switch} from 'react-router-dom';
import requireAuthentication from '../containers/AuthenticatedComponent'

import MainPage from '../views/MainPage';
import Profile from '../views/Profile';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route path="/profile" component={requireAuthentication(Profile)} />
  </Switch>
)


export default Routes;
