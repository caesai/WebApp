import React from 'react';
import Loadable from 'react-loadable';
import requireAuthentication from '../containers/AuthenticatedComponent'
import Home from '../views/MainPage';

function Loading(props) {
  if (props.error) {
    return <div className='container'>Error!</div>;
  } else if (props.pastDelay) {
    return <div className='container'>Loading...</div>;
  } else {
    return null;
  }
}

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/profile',
    component: requireAuthentication(Loadable({
      loader: () => import('../views/Profile'),
      loading: Loading
    }))
  },
  {
    path: '/dashboard',
    component: requireAuthentication(Loadable({
      loader: () => import('../views/DashBoard'),
      loading: Loading
    }))
  }
];

export default routes;
