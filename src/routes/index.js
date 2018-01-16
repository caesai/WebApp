import React from 'react';
import {Route, Switch} from 'react-router-dom';
import requireAuthentication from '../containers/AuthenticatedComponent'
import { generateAsyncRouteComponent } from '../utils/serverRouting';

import MainPage from '../views/MainPage';

export default [
  {
    component: MainPage,
    path: parentRoute => `${parentRoute}/`,
    routes: [
      {
        path: parentRoute => `${parentRoute}/profile`,
        component: generateAsyncRouteComponent({
          loader: () => import('../views/Profile')
        })
      }
    ]
  }
];
