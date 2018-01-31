import React from 'react';
import requireAuthentication from '../containers/AuthenticatedComponent'

import MainPage from '../views/MainPage';
import DashBoard from '../views/DashBoard';
import Profile from '../views/Profile';

const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true
  },
  {
    path: '/profile',
    component: requireAuthentication(Profile)
  },
  {
    path: '/dashboard',
    component: requireAuthentication(DashBoard)
  }
];

export default routes;
