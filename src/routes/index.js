import React from 'react';
import {Route, Switch} from 'react-router-dom';
import requireAuthentication from '../containers/AuthenticatedComponent'
import { generateAsyncRouteComponent } from '../utils/serverRouting';

import MainPage from '../views/MainPage';
import Profile from '../views/Profile';

const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true
  },
  {
    path: '/profile',
    component: Profile
  }
];

export default routes;
