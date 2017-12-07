import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MainPage from '../views/MainPage';
import Profile from '../views/Profile';
import store from '../store/store';

const Routes = () => (
  <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/profile' component={Profile} />
  </Switch>
)

export default Routes;
